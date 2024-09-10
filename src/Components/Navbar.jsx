import { useEffect, useState } from "react";

const Navbar = ({ setRerender }) => {
  // const [category, setCategory] = useState(localStorage.getItem('category'));
  // const [country, setCountry] = useState(localStorage.getItem('country'));
  // const [language, setLanguage] = useState(localStorage.getItem('Language'));

  useEffect(() => {
    localStorage.setItem('category', "general");
    localStorage.setItem('country', "in");
    localStorage.setItem('Language', 'en');
  }, []);

  const languages = [
    { name: 'Arabic', code: 'ar' },
    { name: 'Chinese', code: 'zh' },
    { name: 'Dutch', code: 'nl' },
    { name: 'English', code: 'en' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
    { name: 'Greek', code: 'el' },
    { name: 'Hebrew', code: 'he' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Italian', code: 'it' },
    { name: 'Japanese', code: 'ja' },
    { name: 'Malayalam', code: 'ml' },
    { name: 'Marathi', code: 'mr' },
    { name: 'Norwegian', code: 'no' },
    { name: 'Portuguese', code: 'pt' },
    { name: 'Romanian', code: 'ro' },
    { name: 'Russian', code: 'ru' },
    { name: 'Spanish', code: 'es' },
    { name: 'Swedish', code: 'sv' },
    { name: 'Tamil', code: 'ta' },
    { name: 'Telugu', code: 'te' },
    { name: 'Ukrainian', code: 'uk' }
  ];

  const categories = [
    { name: 'General', code: 'general' },
    { name: 'World', code: 'world' },
    { name: 'Nation', code: 'nation' },
    { name: 'Business', code: 'business' },
    { name: 'Technology', code: 'technology' },
    { name: 'Entertainment', code: 'entertainment' },
    { name: 'Sports', code: 'sports' },
    { name: 'Science', code: 'science' },
    { name: 'Health', code: 'health' },
  ];

  const countries = [
    { name: 'Australia', code: 'au' },
    { name: 'Brazil', code: 'br' },
    { name: 'Canada', code: 'ca' },
    { name: 'China', code: 'cn' },
    { name: 'Egypt', code: 'eg' },
    { name: 'France', code: 'fr' },
    { name: 'Germany', code: 'de' },
    { name: 'Greece', code: 'gr' },
    { name: 'Hong Kong', code: 'hk' },
    { name: 'India', code: 'in' },
    { name: 'Ireland', code: 'ie' },
    { name: 'Israel', code: 'il' },
    { name: 'Italy', code: 'it' },
    { name: 'Japan', code: 'jp' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'Norway', code: 'no' },
    { name: 'Pakistan', code: 'pk' },
    { name: 'Peru', code: 'pe' },
    { name: 'Philippines', code: 'ph' },
    { name: 'Portugal', code: 'pt' },
    { name: 'Romania', code: 'ro' },
    { name: 'Russian Federation', code: 'ru' },
    { name: 'Singapore', code: 'sg' },
    { name: 'Spain', code: 'es' },
    { name: 'Sweden', code: 'se' },
    { name: 'Switzerland', code: 'ch' },
    { name: 'Taiwan', code: 'tw' },
    { name: 'Ukraine', code: 'ua' },
    { name: 'United Kingdom', code: 'gb' },
    { name: 'United States', code: 'us' }
  ];

  const SelectLanguage = (e) => {
    localStorage.setItem('Language', e.target.value);
  }
  const SelectCountry = (e) => {
    localStorage.setItem('country', e.target.value);
  }
  const SelectCategory = (e) => {
    localStorage.setItem('category', e.target.value);
  }

  const filterNews = () => {
    console.log('filtering news');
    setRerender((prev) => prev + 1);
  }

  return (
    <div>
      <nav className="font-[Morn-Regular]">
        <div className="flex justify-between items-center px-3 py-2 text-black">
          <img className="logo fill-transparent bg-transparent w-[12rem]" width={200} height={100} src="./aconews.svg" alt="Logo" />

          <div className="flex flex-col gap-1 sm:hidden">
            <div className="h-[3px] w-[25px] bg-[#0865FE]"></div>
            <div className="h-[3px] w-[25px] bg-[#0865FE]"></div>
            <div className="h-[3px] w-[25px] bg-[#0865FE]"></div>
          </div>

          <div className="space-x-5 hidden sm:flex">
            <select onClick={SelectLanguage}
              defaultValue={'en'}
              name="language"
              className="outline-none bg-white text-black cursor-pointer border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-all duration-150"
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.name}
                </option>
              ))}
            </select>

            {/* Category Dropdown */}
            <select onClick={SelectCategory}
              name="category"
              defaultValue={'general'}
              className="outline-none bg-white cursor-pointer text-black border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-all duration-150"
            >
              {categories.map((category) => (
                <option key={category.code} value={category.code}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Country Dropdown */}
            <select onClick={SelectCountry}
              defaultValue={'in'}
              name="country"
              className="outline-none bg-white text-black cursor-pointer border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-all duration-150"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>

            <button onClick={filterNews} className="rounded-full px-2 bg-[#0865FE]"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/1000/ffffff/horizontal-settings-mixer--v1.png" alt="horizontal-settings-mixer--v1" /></button>
          </div>
        </div>

        <div className="w-full h-[2px] bg-blue-500"></div>
      </nav>
    </div>
  );
};

export default Navbar;
