import fs from 'fs/promises'
import path from 'path'
import { optimize } from 'svgo'
import prettier from 'prettier'

const svgDir = new URL('../icons/', import.meta.url)
const outputFile = new URL('../src/output/icons.js', import.meta.url)

const normalizeSvgForJsx = (svg) =>
  svg
    .replace(/style=""/g, '')
    .replace(/class="/g, 'className="')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/xmlns:xlink=/g, 'xmlnsXlink=')
    .replace(/xml:space=/g, 'xmlSpace=')
    .replace(/viewbox=/gi, 'viewBox=')
    .trim()

const assertSafeSvg = (svg, fileName) => {
  if (!svg.includes('<svg')) {
    throw new Error(`Invalid SVG (missing <svg>): ${fileName}`)
  }
  if (/<script/i.test(svg)) {
    throw new Error(`Unsafe SVG (script tag): ${fileName}`)
  }
  if (/on\w+\s*=/i.test(svg)) {
    throw new Error(`Unsafe SVG (event handler): ${fileName}`)
  }
  // Block obvious scriptable URLs when SVGs are inlined via `dangerouslySetInnerHTML`.
  // Even if most browsers won't execute these in all contexts, it's safer to reject.
  if (/\bjavascript:/i.test(svg)) {
    throw new Error(`Unsafe SVG (javascript: URL): ${fileName}`)
  }
}

const svgoConfig = {
  multipass: true,
  plugins: [
    { name: 'preset-default' },
    'removeDimensions',
    'convertPathData',
    'cleanupNumericValues',
    'mergePaths',
    'removeUselessDefs',
    'sortAttrs',
  ],
}

const describeIcon = (fileName) => {
  const base = path.basename(fileName, '.svg')
  const label = base
    .split(/[-_]/)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ')

  return {
    id: base,
    name: `${label} Icon`,
    category: 'Icon',
    tags: [base, 'icon', 'svg'],
    description: `A custom icon asset for ${label} with optimized SVG markup.`,
  }
}

const buildIcons = async () => {
  const entries = (await fs.readdir(svgDir))
    .filter((entry) => entry.toLowerCase().endsWith('.svg'))
    .sort((a, b) => a.localeCompare(b))

  const icons = []

  for (const entry of entries) {
    const filePath = new URL(entry, svgDir)
    const rawSvg = await fs.readFile(filePath, 'utf8')
    const result = optimize(rawSvg, { path: filePath.pathname, ...svgoConfig })

    if (result.error) {
      throw new Error(`SVGO failed for ${entry}: ${result.error}`)
    }

    const optimizedSvg = result.data.trim()
    assertSafeSvg(optimizedSvg, entry)

    icons.push({
      ...describeIcon(entry),
      svgRaw: optimizedSvg,
      jsxCode: normalizeSvgForJsx(optimizedSvg),
    })
  }

  const generatedFile = `const icons = ${JSON.stringify(icons, null, 2)}\n\nexport default icons\n`
  const formatted = await prettier.format(generatedFile, { filepath: outputFile.pathname })
  await fs.mkdir(new URL('../src/output/', import.meta.url), { recursive: true })
  await fs.writeFile(outputFile, formatted, 'utf8')
  console.log(`Generated ${icons.length} icons to ${outputFile.pathname}`)
}

buildIcons().catch((error) => {
  console.error(error)
  process.exit(1)
})
