const currencySelector = document.querySelector('.currency-selector');
const chart = document.querySelector('.chart');
const iframe = document.querySelector('#igraph');
const currencyValue = document.querySelector('.currency-value');
const dataURL = 'https://api.exchangeratesapi.io/latest?base=PLN';

let currencies = [
    {
        name: "Euro",
        abbreviation: "EUR",
        symbol: "\u20AC",
        flagURL: "https://www.countryflags.io/eu/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/EUR.csv",
    },
    {
        name: "Polish Zloty",
        abbreviation: "PLN",
        symbol: "\u007A\u0142",
        flagURL: "https://www.countryflags.io/pl/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/PLN.csv",
    },
    {
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/us/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/USD.csv",
    },
   
    {
        name: "British Pound",
        abbreviation: "GBP",
        symbol: "\u00A3",
        flagURL: "https://www.countryflags.io/gb/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/GBP.csv",
    },
    {
        name: "Czech Koruna",
        abbreviation: "CZK",
        symbol: "\u004B\u010D",
        flagURL: "https://www.countryflags.io/cz/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/CZK.csv",
    },
    {
        name: "Russian Ruble",
        abbreviation: "RUB",
        symbol: "\u20BD",
        flagURL: "https://www.countryflags.io/ru/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/RUB.csv",
    },
    
    {
        name: "Swiss Franc",
        abbreviation: "CHF",
        symbol: "\u0043\u0048\u0046",
        flagURL: "https://www.countryflags.io/ch/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/CHF.csv",
    },
   
    {
        name: "Swedish Krone",
        abbreviation: "SEK",
        symbol: "\u006B\u0072",
        flagURL: "https://www.countryflags.io/se/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/SEK.csv",
    },
    {
        name: "Norwegian Krone",
        abbreviation: "NOK",
        symbol: "\u006B\u0072",
        flagURL: "https://www.countryflags.io/no/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/NOK.csv",
    },
    {
        name: "Danish Krone",
        abbreviation: "DKK",
        symbol: "\u006B\u0072",
        flagURL: "https://www.countryflags.io/dk/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/DKK.csv",
    },
    {
        name: "Croatian Kuna",
        abbreviation: "HRK",
        symbol: "\u006B\u006E",
        flagURL: "https://www.countryflags.io/hr/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/HRK.csv",
    },
    {
        name: "Hungarian Forint",
        abbreviation: "HUF",
        symbol: "\u0046\u0074",
        flagURL: "https://www.countryflags.io/hu/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/HUF.csv",
    },
    {
        name: "Icelandic Krona",
        abbreviation: "ISK",
        symbol: "\u006B\u0072",
        flagURL: "https://www.countryflags.io/is/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/ISK.csv",
    },
    {
        name: "Bulgarian Lev",
        abbreviation: "BGN",
        symbol: "\u043B\u0432",
        flagURL: "https://www.countryflags.io/bg/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/BGN.csv",
    },
    {
        name: "Romanian Leu",
        abbreviation: "RON",
        symbol: "\u006C\u0065\u0069",
        flagURL: "https://www.countryflags.io/ro/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/RON.csv",
    },
      
    {
        name: "Australian Dollar",
        abbreviation: "AUD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/au/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/AUD.csv",
    },
    {
        name: "New Zealand Dollar",
        abbreviation: "NZD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/nz/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/NZD.csv",
    },
    {
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/ca/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/CAD.csv",
    },
    {
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "https://www.countryflags.io/jp/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/JPY.csv",
    },
    {
        name: "Chinese Yuan Renminbi",
        abbreviation: "CNY",
        symbol: "\u00A5",
        flagURL: "https://www.countryflags.io/cn/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/CNY.csv",
    },
    
    {
        name: "Mexican Peso",
        abbreviation: "MXN",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/mx/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/MXN.csv",
    },
    {
        name: "Singapore Dollar",
        abbreviation: "SGD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/sg/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/SGD.csv",
    },
    {
        name: "Hong Kong Dollar",
        abbreviation: "HKD",
        symbol: "\u0024",
        flagURL: "https://www.countryflags.io/hk/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/HKD.csv",
    },
    
    {
        name: "South Korean Won",
        abbreviation: "KRW",
        symbol: "\u20A9",
        flagURL: "https://www.countryflags.io/kr/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/KRW.csv",
    },
    {
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "https://www.countryflags.io/tr/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/TRY.csv",
    },
    
    {
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "https://www.countryflags.io/in/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/INR.csv",
    },
    {
        name: "Brazilian Real",
        abbreviation: "BRL",
        symbol: "\u0052\u0024",
        flagURL: "https://www.countryflags.io/br/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/BRL.csv",
    },
    {
        name: "South African Rand",
        abbreviation: "ZAR",
        symbol: "\u0052",
        flagURL: "https://www.countryflags.io/za/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/ZAR.csv",
    },
    {
        name: "Philippine Peso",
        abbreviation: "PHP",
        symbol: "\u20B1",
        flagURL: "https://www.countryflags.io/ph/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/PHP.csv",
    },
    
    {
        name: "Indonesian Rupiah",
        abbreviation: "IDR",
        symbol: "\u0052\u0070",
        flagURL: "https://www.countryflags.io/id/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/IDR.csv",
    },
    {
        name: "Malaysian Ringgit",
        abbreviation: "MYR",
        symbol: "\u0052\u004D",
        flagURL: "https://www.countryflags.io/my/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/MYR.csv",
    },
    
    {
        name: "Thai Baht",
        abbreviation: "THB",
        symbol: "\u0E3F",
        flagURL: "https://www.countryflags.io/th/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/THB.csv",
    },
    {
        name: "Israeli Shekel",
        abbreviation: "ILS",
        symbol: "\u20AA",
        flagURL: "https://www.countryflags.io/il/shiny/64.png",
        historyURL: "https://raw.githubusercontent.com/tomeklechu96/waluty/master/ILS.csv",
    }
];

const findCurr = function (abbrev) {
    return currencies.find((c) => c.abbreviation == abbrev)
}


const changeCurrency = function (event) {
    currencyAbbrev = event.target.value;
    currencyValue.textContent = `1 ${findCurr(currencyAbbrev).symbol} = ${(1/findCurr(currencyAbbrev).rate).toFixed(4)} PLN`;
    createChart(currencies.find(curr => curr.abbreviation == currencyAbbrev).historyURL);
}

const createChart = (URL) => {
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data

    let currencyUrl = []

    chart.dataSource.url = URL;
    chart.dataSource.parser = new am4core.CSVParser();
    chart.dataSource.parser.options.useColumnNames = true;

    chart.dateFormatter.inputDateFormat = "yyyy/MM/dd";

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
    categoryAxis.renderer.grid.template.location = 0;
    //categoryAxis.renderer.minGridDistance = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "mid";
    series.dataFields.dateX = "effectiveDate";
    series.tooltipText = "{dateX}: [b]{valueY}[/]";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12,12,12,12)

    // Add scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;
}

const populateSelectField = () => {
    currencies.forEach(curr => {
    if(curr.abbreviation!='PLN'){
        currencySelector.insertAdjacentHTML('beforeend', `
        <option value="${curr.abbreviation}">${curr.abbreviation} - ${curr.name}</option>`)
    }
    console.log("UDAŁO SIĘ");
    })
}

fetch(dataURL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
        currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);

        currencyValue.textContent = `1${findCurr('EUR').symbol} = ${(1/findCurr('EUR').rate).toFixed(4)} PLN`;
        populateSelectField()
    })
    .then(data => {
        console.log('XDDD');
        createChart(currencies.find(curr => curr.abbreviation == 'EUR').historyURL);
    })
    .catch(err => console.log(err))


currencySelector.addEventListener('change', changeCurrency);