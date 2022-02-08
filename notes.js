// ==UserScript==
// @name         Notebook 0.1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hong's notebook
// @author       Honghong
// @include      http://*
// @include      https://*
// @icon         data:image/bmp;base64,Qk32EgAAAAAAADYAAAAoAAAAKAAAACgAAAABABgAAAAAAMASAAAjLgAAIy4AAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXFxcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiYmi4uLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATk5O////MzMzAAAAAAAAAAAAAAAATk5OAAAAAAAAAAAAAAAAAAAAAAAAnJycJiYmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAenp62tra////rq6uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMz2tra////a2trAAAAAAAAAAAAw8PD////JiYmAAAAAAAAAAAAAAAAi4uL////enp6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi4uL////////////QEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArq6u////////MzMzAAAAAAAArq6u////2traAAAAAAAAAAAAAAAArq6u////////JiYmAAAAAAAAAAAAAAAAAAAAAAAAJiYmw8PD////////////rq6uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArq6u////////JiYmAAAAAAAA2tra////w8PDAAAAAAAAAAAAXFxc////////nJycAAAAAAAAAAAAAAAAAAAAAAAAAAAAw8PD////////////nJycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATk5O////w8PDAAAAAAAAMzMz////////i4uLAAAAAAAAAAAAw8PD////////JiYmAAAAAAAAAAAAAAAAAAAAAAAAw8PD////////////w8PDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAenp62traTk5OAAAAAAAAXFxc2traXFxcAAAAAAAAAAAAQEBA////2trarq6uAAAAAAAAAAAAAAAAAAAAAAAAenp6////////2traw8PDGRkZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATk5OTk5OAAAAAAAAAAAAa2trJiYmAAAAAAAAAAAAAAAAa2tri4uLGRkZAAAAAAAAAAAAAAAAAAAAAAAAJiYm2trarq6uXFxcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnJyci4uLQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRkZ2tra////////2trarq6ua2trJiYmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXFxc////////////////////////////2traw8PDenp6QEBAGRkZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiYmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiYma2trw8PD////2tra2tra2tra////////////////2tra2traw8PDnJycenp6enp6rq6uw8PDw8PDw8PDw8PDw8PD////2trai4uLenp6enp6QEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiYmAAAAAAAAAAAAJiYmXFxcnJyc2tra////////////////////////////////////////////////////////////////////2trarq6uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw8PD////rq6uenp6enp6enp6rq6uw8PDw8PD2traw8PD2tra2tra////////////////////2tranJycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2tra////enp6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRkZrq6uw8PDi4uLa2trMzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXFxcenp6QEBAAAAAnJyc////XFxcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRkZ2tra////////////2traw8PD////i4uLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiYmenp6w8PD2tra2tra////////////////2trai4uLMzMzMzMzQEBAnJyca2trAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRkZQEBAenp62tra////2tra////////////////////////2tranJycJiYmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw8PDw8PDAAAAMzMzenp6w8PD2tra////////////////rq6uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArq6ui4uLAAAAAAAAAAAAAAAAGRkZXFxcrq6uTk5OJiYmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRkZXFxcw8PD2traw8PDw8PD2traw8PDXFxca2trGRkZAAAAAAAAAAAAXFxci4uLnJycDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXFxcw8PD////2tra2tra2tra////////////////////2tranJycQEBATk5O2tra////////a2trAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw8PDi4uLMzMzAAAAAAAAAAAAMzMzrq6u////w8PD2tra////////////////////////////rq6uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAenp6////JiYmAAAAAAAAAAAAAAAAAAAAenp62traAAAAGRkZXFxcrq6uw8PD2tra////////////2traAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiYm2tra2traAAAAAAAATk5ODAwMAAAAAAAAenp6////MzMzAAAAAAAAAAAAAAAAw8PD////////////2traGRkZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw8PD////enp6AAAAXFxc////w8PDAAAAAAAAenp62traGRkZenp6AAAAAAAAAAAAGRkZ2tra////////////MzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnJyc////2traAAAAAAAArq6u////w8PDAAAAAAAAi4uL2traGRkZXFxc2traw8PDenp6AAAArq6u////////////a2trAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATk5O////////nJycAAAAAAAA2tra2traJiYmAAAAAAAAw8PD////MzMzJiYm////////2traAAAAenp6////////////enp6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2tra////w8PDJiYmAAAAAAAA2traenp6AAAAAAAAAAAAw8PD////enp6AAAA2tra////2traAAAAMzMz////////////w8PDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAenp62traenp6AAAAAAAAAAAAAAAAa2trAAAAAAAAAAAArq6u////////a2trAAAA2tra////enp6AAAAMzMz////////////2traAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRkZrq6uJiYmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw8PD////////MzMzAAAA2traw8PDAAAAAAAAMzMz////////////////QEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBA////nJycAAAAAAAArq6uAAAAAAAAAAAAMzMz////////////////nJycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXFxcw8PD////w8PDnJycXFxcGRkZAAAAAAAAAAAAMzMz////////////////////nJycDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATk5Ow8PD2tra////////////////2tra2trarq6uenp6rq6u////////////////////////w8PDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMzenp6nJycw8PD2tra2tra////////////////////////////////2traenp6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzMzQEBAenp6i4uLrq6uw8PDrq6uXFxcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// @grant
// ==/UserScript==

(function () {
  function withDefault(target, defaultValue) {
    if (target === null || target === undefined || target === {}) {
      return defaultValue
    } else {
      return target
    }
  }

  function Div(style, children) {
    const el = document.createElement('div')
    el.setAttribute('style', style)
    if (Array.isArray(children)) {
      children.forEach(child => el.appendChild(child))
    } else {
      el.appendChild(children)
    }
    return el
  }

  function Row(children, props = {}) {
    return Div(`
      display: flex;
      flex-direction: row;
      justify-content: ${props?.justifyContent ?? "center"};
      align-items: ${props?.alignItems ?? "center"};
      ${props.style}
    `, children)
  }

  function Column(children, props = {}) {
    return Div(`
      display: flex;
      flex-direction: column;
      justify-content: ${props?.justifyContent ?? "center"};
      align-items: ${props?.alignItems ?? "center"};
    `, children)
  }

  function Spacer(props) {
    return Div(
      `width: ${withDefault(props['width'], 0)}px;
      height: ${withDefault(props['height'], 0)}px;`
      , [])
  }

  function Button(text, onClick) {
    const el = document.createElement('button')
    el.style = `
      width: 60px;
      height: 45px;
      background: #f8f9fa;
      border: 1px solid #38393a;
      border-radius: 5px;
      cursor: pointer;
      color: black;
      text-align: center;
      line-height: 45px;
      hover {
        background: #0066ff9c;
      };
    `
    const textEl = Text(text)
    el.appendChild(textEl)
    el.onclick = onClick
    return el
  }

  function TextButton(text, props = {}) {
    const span = document.createElement('span')
    span.style = `
      cursor: pointer;
      font-size: ${props.fontSize}px;
    `;
    span.onclick = props.onClick
    span.appendChild(Text(text))
    return span 
  }

  function Text(text, style = "") {
    const span = document.createElement('span')
    span.innerHTML = text
    span.style = style
    return span
  }

  function Input(style, type, onChange) {
    const input = document.createElement('input')
    input.type = type
    input.style = style
    input.onchange = (e) => onChange(e.target.value)
    return input
  }

  function TextArea(style, onChange) {
    const textarea = document.createElement('textarea')
    textarea.style = style
    textarea.onchange = onChange
    return textarea
  }

  const floatDivStyle = `
    position: fixed;
    top: 40px;
    right: 40px;
    z-index: 9999;
    box-shadow: -5px 10px 30px 5px #a2a2a2;
    color: #dcdde0;
    border-radius: 5px;
    background: #141f33;
    padding: 20px;
  `

  const ID = "note_root"

  function unfold() {
    try {
      document.body.removeChild(document.getElementById(ID))
    } catch (e) {

    }
    const bigSpacer = () => Spacer({ width: 15, height: 15 })
    const smallSpacer = () => Spacer({ width: 8, height: 8 })
    const root = Div(
      floatDivStyle,
      Column(
        [
          Row(
            [
              Text("我的记事本 ❤", "font-weight: bold; font-size: 20px;"),
              Div("flex: 1", []),
              TextButton(
                "💾",
                {
                  fontSize: 26,
                  onClick: () => { }
                }
              ),
              Spacer({ width: 20, height: 20 }),
              TextButton(
                "❌",
                {
                  fontSize: 26,
                  onClick: fold
                }
              )
            ],
            {
              style: "width: 100%"
            }
          ),
          bigSpacer(),
          Text("摘录内容", "font-size: 16px;"),
          smallSpacer(),
          TextArea(
            `width: 500px; 
            max-width: 500px; 
            height: 200px; 
            font-size: 16px;
            padding: 10px;
            `,
            (content) => console.log(content)
          ),
          bigSpacer(),
          Text("备注", "font-size: 16px;"),
          smallSpacer(),
          TextArea(
            `width: 500px; 
            max-width: 500px; 
            height: 100px; 
            font-size: 16px;
            padding: 10px;
            `,
            (content) => console.log(content)
          ),
          bigSpacer(),
          Text("标签", "font-size: 16px;"),
          smallSpacer(),
          Input(
            "height: 32px; width: 500px; padding: 10px;",
            "text",
            (content) => console.log(content)
          ),
        ],
        {
          alignItems: "flex-start"
        }
      )
    );
    root.id = ID
    document.body.appendChild(root)
  }

  function fold() {
    try {
      document.body.removeChild(document.getElementById(ID))
    } catch (e) {

    }
    const root = Div(
      floatDivStyle,
      Button("Start 💲", unfold)
    )
    root.id = ID
    document.body.appendChild(root)
  }

  fold()
})()
