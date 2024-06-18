declare module 'tailwindcss/lib/util/flattenColorPalette' {
  type FlattenColorPalette = (colors: Record<string, string | Record<string, string>>) => Record<string, string>
  const flattenColorPalette: FlattenColorPalette
  export default flattenColorPalette
}
