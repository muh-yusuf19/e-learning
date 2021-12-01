const Table1 = () => {
  return (
    <div className="flex-auto h-full w-full lg:w-1/3 overflow-y-auto">
      <div className="container grid mx-auto">
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead className="bg-indigo-800">
                <tr className="text-xs font-semibold tracking-wide text-left text-white uppercase">
                  <th className="text-center px-4 py-3">Rumus Asam</th>
                  <th className="text-center px-4 py-3">Nama Asam</th>
                  <th className="text-center px-4 py-3">Reaksi Ionisasi</th>
                  <th className="text-center px-4 py-3">Valensi Asam</th>
                  <th className="text-center px-4 py-3">Sisa Asam</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="py-1 text-sm font-bold border-0">
                    <p>Asam nonoksi</p>
                  </td>
                  <td className="py-1 text-sm border-0">
                    <p className="opacity-0">Asam nonoksi</p>
                  </td>
                  <td className="py-1 text-sm border-0">
                    <p className="opacity-0">Asam nonoksi</p>
                  </td>
                  <td className="py-1 text-sm border-0">
                    <p className="opacity-0">Asam nonoksi</p>
                  </td>
                  <td className="py-1 text-sm border-0">
                    <p className="opacity-0">Asam nonoksi</p>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">HF</td>
                  <td className="py-1 text-sm">Asam fluorida</td>
                  <td className="py-1 text-sm">
                    HF &#8594; H<sup>+</sup> + F<sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    F<sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">HCl</td>
                  <td className="py-1 text-sm">Asam klorida</td>
                  <td className="py-1 text-sm">
                    HCl &#8594; H<sup>+</sup> + Cl<sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    Cl<sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">HBr</td>
                  <td className="py-1 text-sm">Asam bromida</td>
                  <td className="py-1 text-sm">
                    HBr &#8594; H<sup>+</sup> + Br<sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    Br<sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">HI</td>
                  <td className="py-1 text-sm">Asam iodida</td>
                  <td className="py-1 text-sm">
                    HI &#8594; H<sup>+</sup> + I<sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    I<sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm border-0">HCN</td>
                  <td className="py-1 text-sm">Asam sianida</td>
                  <td className="py-1 text-sm">
                    HCN &#8594; H<sup>+</sup> + CN<sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    CN<sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400 border-b-2 border-indigo-800">
                  <td className="py-1 text-sm">
                    H<sub>2</sub>S
                  </td>
                  <td className="py-1 text-sm">Asam sulfida</td>
                  <td className="py-1 text-sm">
                    H<sub>2</sub>S &#8594; 2H<sup>+</sup> + S<sup>2-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">2</td>
                  <td className="py-1 text-sm">
                    S<sup>2-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="py-1 text-sm font-bold">
                    <p>Asam oksi</p>
                  </td>
                  <td className="py-1 text-sm">
                    <p className="opacity-0">Asam oksi</p>
                  </td>
                  <td className="py-1 text-sm">
                    <p className="opacity-0">Asam oksi</p>
                  </td>
                  <td className="py-1 text-sm">
                    <p className="opacity-0">Asam oksi</p>
                  </td>
                  <td className="py-1 text-sm">
                    <p className="opacity-0">Asam oksi</p>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    HNO<sub>2</sub>
                  </td>
                  <td className="py-1 text-sm">Asam nitrit</td>
                  <td className="py-1 text-sm">
                    HNO<sub>2</sub> &#8594; H<sup>+</sup> + NO<sub>2</sub>
                    <sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    NO<sub>2</sub>
                    <sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    HNO<sub>3</sub>
                  </td>
                  <td className="py-1 text-sm">Asam nitrat</td>
                  <td className="py-1 text-sm">
                    HNO<sub>3</sub> &#8594; H<sup>+</sup> + NO<sub>3</sub>
                    <sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    NO<sub>3</sub>
                    <sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    H<sub>2</sub>SO<sub>3</sub>
                  </td>
                  <td className="py-1 text-sm">Asam sulfit</td>
                  <td className="py-1 text-sm">
                    H<sub>2</sub>SO<sub>3</sub> &#8594; 2H<sup>+</sup> + SO
                    <sub>3</sub>
                    <sup>2-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">2</td>
                  <td className="py-1 text-sm">
                    SO<sub>3</sub>
                    <sup>2-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    H<sub>2</sub>SO<sub>4</sub>
                  </td>
                  <td className="py-1 text-sm">Asam sulfat</td>
                  <td className="py-1 text-sm">
                    H<sub>2</sub>SO<sub>3</sub> &#8594; 2H<sup>+</sup> + SO
                    <sub>4</sub>
                    <sup>2-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">2</td>
                  <td className="py-1 text-sm">
                    SO<sub>4</sub>
                    <sup>2-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    H<sub>3</sub>PO<sub>3</sub>
                  </td>
                  <td className="py-1 text-sm">Asam fosfit</td>
                  <td className="py-1 text-sm">
                    H<sub>3</sub>PO<sub>3</sub> &#8594; 2H<sup>+</sup> + HPO
                    <sub>3</sub>
                    <sup>2-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">2</td>
                  <td className="py-1 text-sm">
                    HSO<sub>3</sub>
                    <sup>2-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    H<sub>3</sub>PO<sub>4</sub>
                  </td>
                  <td className="py-1 text-sm">Asam fosfat</td>
                  <td className="py-1 text-sm">
                    H<sub>3</sub>PO<sub>4</sub> &#8594; 3H<sup>+</sup> + PO
                    <sub>4</sub>
                    <sup>3-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">2</td>
                  <td className="py-1 text-sm">
                    HSO<sub>3</sub>
                    <sup>2-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    H<sub>2</sub>CO<sub>3</sub>
                  </td>
                  <td className="py-1 text-sm">Asam karbonat</td>
                  <td className="py-1 text-sm">
                    H<sub>2</sub>CO<sub>3</sub> &#8594; 2H<sup>+</sup> + CO
                    <sub>3</sub>
                    <sup>2-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">2</td>
                  <td className="py-1 text-sm">
                    CO<sub>3</sub>
                    <sup>2-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400 border-b-2 border-indigo-800">
                  <td className=" py-1 text-sm">
                    HCIO<sub>4</sub>
                  </td>
                  <td className="py-1 text-sm">Asam perklorat</td>
                  <td className="py-1 text-sm">
                    HCIO<sub>4</sub> &#8594; H<sup>+</sup> + CIO
                    <sub>4</sub>
                    <sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    CIO<sub>4</sub>
                    <sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm font-bold">Asam Organik</td>
                  <td className="py-1 text-sm opacity-0">Asam Organik</td>
                  <td className="py-1 text-sm opacity-0">Asam Organik</td>
                  <td className="py-1 text-sm opacity-0">Asam Organik</td>
                  <td className="py-1 text-sm opacity-0">Asam Organik</td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">HCOOH</td>
                  <td className="py-1 text-sm">Asam format (asam semut)</td>
                  <td className="py-1 text-sm">
                    HCOOH &#8594; H<sup>+</sup> + HCOO<sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    HCOO<sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    CH<sub>3</sub>COOH
                  </td>
                  <td className="py-1 text-sm">Asam asetat (asam cuka)</td>
                  <td className="py-1 text-sm">
                    CH<sub>3</sub>COOH &#8594; H<sup>+</sup> + CH<sub>3</sub>
                    COO<sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    CH<sub>3</sub>
                    COO<sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    C<sub>6</sub>H<sub>5</sub>COOH
                  </td>
                  <td className="py-1 text-sm">Asam benzoat</td>
                  <td className="py-1 text-sm">
                    C<sub>6</sub>H<sub>5</sub>COOH &#8594; H<sup>+</sup> + C
                    <sub>6</sub>H<sub>5</sub>COO<sup>-</sup>
                  </td>
                  <td className="py-1 text-sm text-center">1</td>
                  <td className="py-1 text-sm">
                    C<sub>6</sub>H<sub>5</sub>COO<sup>-</sup>
                  </td>
                </tr>
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="py-1 text-sm">
                    H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>
                  </td>
                  <td className="py-1 text-sm">Asam oksalat</td>
                  <td className="py-1 text-sm">
                    H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> &#8594; 2H
                    <sup>+</sup> + C<sub>2</sub>O<sub>4</sub>
                    <sup>2-</sup>
                  </td>
                  <td className="py-1 text-sm">2</td>
                  <td className="py-1 text-sm">
                    C<sub>2</sub>O<sub>4</sub>
                    <sup>2-</sup>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table1
