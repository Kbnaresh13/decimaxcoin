// Modal handling
function openModal(type) {
  const modalBg = document.getElementById('modal-bg');
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = getCalculatorHtml(type);
  modalBg.classList.add('active');
}

function closeModal(e) {
  if (!e || e.target.id === 'modal-bg') {
    document.getElementById('modal-bg').classList.remove('active');
    document.getElementById('modal-content').innerHTML = '';
  }
}

// Calculator HTML generators --
function getCalculatorHtml(type) {
  switch(type) {
    case "android":
      return androidCalculatorUI();
    case "ios":
      return iosCalculatorUI();
    case "crypto-invest":
      return cryptoInvestmentUI();
    case "crypto-trading":
      return cryptoTradingUI();
    case "stock-invest":
      return stockInvestmentUI();
    case "sip-calc":
      return sipCalculatorUI();
    default:
      return "<div style='padding: 30px'>Error: No calculator found.</div>";
  }
}

// ----------- Actual Calculator UI/LOGIC

function androidCalculatorUI() {
  return `
    <div class="modal-header">Android Calculator 
      <button class="close-modal-btn" onclick="closeModal(event)">&times;</button>
    </div>
    <div class="calc-app android-calc">
      <input class="calc-display" id="android-display" type="text" value="0" readonly />
      <div class="calc-btns">
        <button onclick="clearAndroidCalc()">C</button>
        <button onclick="androidInput('/')">÷</button>
        <button onclick="androidInput('*')">×</button>
        <button onclick="androidInput('-')">−</button>
        <button onclick="androidInput('7')">7</button>
        <button onclick="androidInput('8')">8</button>
        <button onclick="androidInput('9')">9</button>
        <button onclick="androidInput('+')">+</button>
        <button onclick="androidInput('4')">4</button>
        <button onclick="androidInput('5')">5</button>
        <button onclick="androidInput('6')">6</button>
        <button onclick="androidEval()">=</button>
        <button onclick="androidInput('1')">1</button>
        <button onclick="androidInput('2')">2</button>
        <button onclick="androidInput('3')">3</button>
        <button onclick="androidInput('.')">.</button>
        <button style="grid-column: span 2;" onclick="androidInput('0')">0</button>
      </div>
    </div>
    <style>
      .android-calc .calc-btns {
        display: grid;
        grid-template-columns: repeat(4,44px);
        gap: 7.5px;
        margin: 18px 0;
        justify-content: center;
      }
      .android-calc .calc-btns button {
        font-size: 1.14rem;
        padding: 13px 0;
        background: #181b26;
        color: #13e3e6;
        border: 1.2px solid #12d4c7;
        border-radius: 7.5px;
        box-shadow: 0 2px 5px #0efbdb10;
        font-weight: 600;
        cursor: pointer;
      }
      .android-calc .calc-display {
        width: 92%;
        margin: 15px 4%;
        background: #141e26;
        color: #1aecff;
        font-size: 1.5rem;
        border: none;
        border-radius: 8px;
        padding: 7px 4px;
        text-align: right;
        font-weight: 700;
      }
    </style>
    <script>
      window.androidCalcExpr = '';
      function androidInput(val) {
        var d = document.getElementById('android-display');
        if(d.value==='0'&& val !== '.') d.value = '';
        d.value += val;
      }
      function androidEval() {
        var d = document.getElementById('android-display');
        try {
          d.value = eval(d.value.replace('÷','/').replace('×','*'));
        } catch { d.value = 'Error'; }
      }
      function clearAndroidCalc() {
        document.getElementById('android-display').value = '0';
      }
    </script>
  `;
}

function iosCalculatorUI() {
  return `
    <div class="modal-header">iPhone Calculator 
      <button class="close-modal-btn" onclick="closeModal(event)">&times;</button>
    </div>
    <div class="calc-app ios-calc">
      <input class="calc-display" id="ios-display" type="text" value="0" readonly />
      <div class="calc-btns">
        <button class="ios-fn-btn" onclick="iosClear()">C</button>
        <button class="ios-fn-btn" onclick="iosInput('%')">%</button>
        <button class="ios-fn-btn" onclick="iosInput('/')">÷</button>
        <button class="ios-op-btn" onclick="iosInput('*')">×</button>
        <button onclick="iosInput('7')">7</button>
        <button onclick="iosInput('8')">8</button>
        <button onclick="iosInput('9')">9</button>
        <button class="ios-op-btn" onclick="iosInput('-')">−</button>
        <button onclick="iosInput('4')">4</button>
        <button onclick="iosInput('5')">5</button>
        <button onclick="iosInput('6')">6</button>
        <button class="ios-op-btn" onclick="iosInput('+')">+</button>
        <button onclick="iosInput('1')">1</button>
        <button onclick="iosInput('2')">2</button>
        <button onclick="iosInput('3')">3</button>
        <button class="ios-op-btn" onclick="iosEval()">=</button>
        <button onclick="iosInput('0')" style="grid-column: span 2;">0</button>
        <button onclick="iosInput('.')">.</button>
      </div>
    </div>
    <style>
      .ios-calc .calc-btns {
        display: grid;
        grid-template-columns: repeat(4,44px);
        gap: 8px;
        margin: 18px 0;
        justify-content: center;
      }
      .ios-calc .calc-btns button {
        font-size: 1.13rem;
        padding: 13px 0;
        background: #f2f2f2;
        color: #0b889a;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 2px 5px #0efbdb17;
      }
      .ios-calc .calc-btns .ios-fn-btn { background: #e7e8ec; color: #34cfef; }
      .ios-calc .calc-btns .ios-op-btn { background: #11edd3; color: #232e37; }
      .ios-calc .calc-btns .ios-op-btn:hover { background: #2de0ee;}
      .ios-calc .calc-display {
        width: 92%;
        margin: 15px 4%;
        background: #fff;
        color: #0ac7c2;
        font-size: 1.5rem;
        border: none;
        border-radius: 9px;
        padding: 7px 4px;
        text-align: right;
        font-weight: 700;
        box-shadow: 0 2px 6px #09e8d744;
      }
    </style>
    <script>
      window.iosCalcExpr = '';
      function iosInput(val) {
        var d = document.getElementById('ios-display');
        if(d.value==='0' && val !== '.') d.value = '';
        d.value += val;
      }
      function iosEval() {
        var d = document.getElementById('ios-display');
        try {
          d.value = eval(d.value.replace('÷','/').replace('×','*'));
        } catch { d.value = 'Error'; }
      }
      function iosClear() {
        document.getElementById('ios-display').value = '0';
      }
    </script>
  `;
}

function cryptoInvestmentUI() {
  return `
    <div class="modal-header">Crypto Investment Calculator 
      <button class="close-modal-btn" onclick="closeModal(event)">&times;</button>
    </div>
    <div class="calc-form">
      <label>Buy Price: <input type="number" id="ci-buy" step="any"></label>
      <label>Sell Price: <input type="number" id="ci-sell" step="any"></label>
      <label>Amount: <input type="number" id="ci-amt" step="any"></label>
      <button onclick="cryptoInvestCalc()">Calculate Profit</button>
      <div class="calc-result" id="ci-result"></div>
    </div>
    <script>
      function cryptoInvestCalc() {
        var buy = parseFloat(document.getElementById('ci-buy').value)||0;
        var sell = parseFloat(document.getElementById('ci-sell').value)||0;
        var amt = parseFloat(document.getElementById('ci-amt').value)||0;
        var profit = (sell - buy) * amt;
        document.getElementById('ci-result').innerHTML = 'Profit/Loss: ' + profit.toFixed(4);
      }
    </script>
    <style>
      .calc-form { padding: 22px 26px 12px 26px; display: flex; flex-direction: column; gap: 15px; }
      .calc-form label { color: #33e7de; font-size: 1.06rem; gap: 6px; display: flex; align-items: center; }
      .calc-form input { margin-left: 7px; width: 90px; background: #0c2131; color: #16f3f0; border-radius: 6px; border: 1.2px solid #12d4c7; font-size: 1.02rem; padding: 2px 8px;}
      .calc-form button { background: #11edd3; color: #1c232e; font-weight: bold; border-radius: 7px; border: none; padding: 9px 26px; font-size: 1.1rem; cursor: pointer; box-shadow: 0 1px 3px #6ffee733;}
      .calc-form button:hover { background: #13e3e6; }
      .calc-result { color: #15ffae;font-size:1.05em;margin-top:9px;}
    </style>
  `;
}

function cryptoTradingUI() {
  return `
    <div class="modal-header">Crypto Trading (F&O) Calculator 
      <button class="close-modal-btn" onclick="closeModal(event)">&times;</button>
    </div>
    <div class="calc-form">
      <label>Buy Price: <input type="number" id="ct-buy" step="any"></label>
      <label>Sell Price: <input type="number" id="ct-sell" step="any"></label>
      <label>Leverage: <input type="number" id="ct-lev" step="any"></label>
      <label>Amount: <input type="number" id="ct-amt" step="any"></label>
      <button onclick="cryptoTradeCalc()">Calculate Profit</button>
      <div class="calc-result" id="ct-result"></div>
    </div>
    <script>
      function cryptoTradeCalc() {
        var buy = parseFloat(document.getElementById('ct-buy').value)||0;
        var sell = parseFloat(document.getElementById('ct-sell').value)||0;
        var lev = parseFloat(document.getElementById('ct-lev').value)||1;
        var amt = parseFloat(document.getElementById('ct-amt').value)||0;
        var profit = (sell - buy) * amt * lev;
        document.getElementById('ct-result').innerHTML = 'Profit/Loss: ' + profit.toFixed(4);
      }
    </script>
    <style>
      .calc-form { padding: 22px 26px 12px 26px; display: flex; flex-direction: column; gap: 15px; }
      .calc-form label { color: #33e7de; font-size: 1.06rem; gap: 6px; display: flex; align-items: center; }
      .calc-form input { margin-left: 7px; width: 90px; background: #0c2131; color: #16f3f0; border-radius: 6px; border: 1.2px solid #12d4c7; font-size: 1.02rem; padding: 2px 8px;}
      .calc-form button { background: #11edd3; color: #1c232e; font-weight: bold; border-radius: 7px; border: none; padding: 9px 26px; font-size: 1.1rem; cursor: pointer; box-shadow: 0 1px 3px #6ffee733;}
      .calc-form button:hover { background: #13e3e6; }
      .calc-result { color: #82f57c;font-size:1.05em;margin-top:9px;}
    </style>
  `;
}

function stockInvestmentUI() {
  return `
    <div class="modal-header">Stock Investment &amp; Trading Calculator 
      <button class="close-modal-btn" onclick="closeModal(event)">&times;</button>
    </div>
    <div class="calc-form">
      <label>Buy Price: <input type="number" id="si-buy" step="any"></label>
      <label>Sell Price: <input type="number" id="si-sell" step="any"></label>
      <label>Quantity: <input type="number" id="si-qty" step="any"></label>
      <label>Brokerage (total): <input type="number" id="si-brk" step="any"></label>
      <label>Taxes (total): <input type="number" id="si-tax" step="any"></label>
      <button onclick="stockInvestCalc()">Calculate Net Profit</button>
      <div class="calc-result" id="si-result"></div>
    </div>
    <script>
      function stockInvestCalc() {
        var buy = parseFloat(document.getElementById('si-buy').value)||0;
        var sell = parseFloat(document.getElementById('si-sell').value)||0;
        var qty = parseFloat(document.getElementById('si-qty').value)||0;
        var brk = parseFloat(document.getElementById('si-brk').value)||0;
        var tax = parseFloat(document.getElementById('si-tax').value)||0;
        var gross = (sell - buy) * qty;
        var net = gross - brk - tax;
        document.getElementById('si-result').innerHTML = 'Net Profit/Loss: ' + net.toFixed(2);
      }
    </script>
    <style>
      .calc-form { padding: 22px 26px 12px 26px; display: flex; flex-direction: column; gap: 15px; }
      .calc-form label { color: #33e7de; font-size: 1.07rem; gap: 6px; display: flex; align-items: center; }
      .calc-form input { margin-left: 7px; width: 90px; background: #0c2131; color: #16f3f0; border-radius: 6px; border: 1.2px solid #12d4c7; font-size: 1.02rem; padding: 2px 8px;}
      .calc-form button { background: #11edd3; color: #1c232e; font-weight: bold; border-radius: 7px; border: none; padding: 9px 26px; font-size: 1.1rem; cursor: pointer; box-shadow: 0 1px 3px #6ffee733;}
      .calc-form button:hover { background: #13e3e6; }
      .calc-result { color: #85ffcb;font-size:1.05em;margin-top:9px;}
    </style>
  `;
}

function sipCalculatorUI() {
  return `
    <div class="modal-header">SIP Calculator 
      <button class="close-modal-btn" onclick="closeModal(event)">&times;</button>
    </div>
    <div class="calc-form">
      <label>Monthly SIP Amount: <input type="number" id="sip-amt" step="any"></label>
      <label>Duration (years): <input type="number" id="sip-yrs" step="any"></label>
      <label>Expected Return (% per annum): <input type="number" id="sip-ret" step="any"></label>
      <button onclick="sipCalc()">Calculate Maturity</button>
      <div class="calc-result" id="sip-result"></div>
    </div>
    <script>
      function sipCalc() {
        var amt = parseFloat(document.getElementById('sip-amt').value)||0;
        var yrs = parseFloat(document.getElementById('sip-yrs').value)||0;
        var ret = parseFloat(document.getElementById('sip-ret').value)||0;
        var n = yrs*12;
        var i = ret/100/12;
        var fv = amt*((Math.pow(1+i,n)-1)*(1+i))/i;
        document.getElementById('sip-result').innerHTML = 'Expected Maturity: ' + fv.toLocaleString(undefined,{maximumFractionDigits:2});
      }
    </script>
    <style>
      .calc-form { padding: 22px 26px 12px 26px; display: flex; flex-direction: column; gap: 15px; }
      .calc-form label { color: #33e7de; font-size: 1.07rem; gap: 6px; display: flex; align-items: center; }
      .calc-form input { margin-left: 7px; width: 90px; background: #0c2131; color: #16f3f0; border-radius: 6px; border: 1.2px solid #12d4c7; font-size: 1.02rem; padding: 2px 8px;}
      .calc-form button { background: #11edd3; color: #1c232e; font-weight: bold; border-radius: 7px; border: none; padding: 9px 26px; font-size: 1.1rem; cursor: pointer; box-shadow: 0 1px 3px #6ffee733;}
      .calc-form button:hover { background: #13e3e6; }
      .calc-result { color: #f5b485;font-size:1.05em;margin-top:9px;}
    </style>
  `;
  }
