const Table2 = () => {
  return (
    <div className="flex-auto h-full w-full lg:w-1/3 overflow-y-auto">
      <div className="container grid mx-auto">
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead className="bg-indigo-800">
                <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase">
                  <th className="px-4 py-3">Rumus Basa</th>
                  <th className="px-4 py-3">Nama Basa</th>
                  <th className="px-4 py-3">Reaksi Ionisasi</th>
                  <th className="px-4 py-3">Valensi Asam</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">NaOH</td>
                  <td className="px-4 py-1 text-sm border-0">
                    Natrium hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    NaOH &#8594; Na<sup>+</sup> + OH<sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">1</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">KOH</td>
                  <td className="px-4 py-1 text-sm border-0">
                    Kalium hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    KOH &#8594; K<sup>+</sup> + OH<sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">1</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">
                    Mg(OH)<sub>2</sub>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Magnesium hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Mg(OH)<sub>2</sub> &#8594; Mg<sup>2+</sup> + 2OH
                    <sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">2</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">
                    Ca(OH)<sub>2</sub>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Kalsium hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Ca(OH)<sub>2</sub> &#8594; Ca<sup>2+</sup> + 2OH
                    <sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">2</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">
                    Sr(OH)<sub>2</sub>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Stronsium hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Sr(OH)<sub>2</sub> &#8594; Sr<sup>2+</sup> + 2OH
                    <sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">2</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">
                    Ba(OH)<sub>2</sub>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Barium hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Ba(OH)<sub>2</sub> &#8594; Ba<sup>2+</sup> + 2OH
                    <sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">2</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">
                    Al(OH)<sub>3</sub>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Alumunium hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Al(OH)<sub>2</sub> &#8594; Sr<sup>3+</sup> + 3OH
                    <sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">3</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">
                    Fe(OH)<sub>2</sub>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Besi(II) hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Fe(OH)<sub>2</sub> &#8594; Sr<sup>2+</sup> + 2OH
                    <sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">2</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-1 text-sm font-bold border-0">
                    Fe(OH)<sub>3</sub>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Besi(III) hidroksida
                  </td>
                  <td className="px-4 py-1 text-sm border-0">
                    Fe(OH)<sub>3</sub> &#8594; Fe<sup>3+</sup> + 3OH
                    <sup>-</sup>
                  </td>
                  <td className="px-4 py-1 text-sm border-0">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table2
