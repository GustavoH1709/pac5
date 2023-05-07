import CurrencyInput from 'react-currency-input-field';

export function DecimalInput({
    disabled = false,
    label = "",
    placeholder = "",
    onChange = (e: any) => {},
    invalid = "",
    value = "" || 0,
    precision = 0,
    allowNegative = false,
    maxLength = 10
  }) {

    const step = () => {
      if(!precision) {
        return 1;
      }

      return Number("0." + '1'.toString().padStart(precision, '0'))
    }


    console.log(step())

    return (
      <>
        <label className="block text-gray-700 font-bold mb-2" htmlFor={label}>
          {label}
        </label>
        <CurrencyInput
          className="appearance-none w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
          value={value}
          onValueChange={onChange}
          placeholder={placeholder || label}
          disabled={disabled}
          decimalsLimit={precision}
          decimalSeparator=","
          groupSeparator='.'
          allowNegativeValue={allowNegative || false}
          maxLength={maxLength}
          allowDecimals
          step={step()}
        />
        {invalid && <p className="text-red-600">{invalid}</p>}
      </>
    );
  }
  
  