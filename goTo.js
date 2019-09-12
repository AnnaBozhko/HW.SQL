function goTo1Page () {
    document.getElementById('temp').remove();
    const submitLogIn = document.getElementById('submitSignIn');
    submitLogIn.setAttribute('id','submitLogIn');
}

function createRow() {
    const tr = document.createElement('TR');
    tr.setAttribute('class', 'global__table_row');

    const td1 = document.createElement('td');
    td1.setAttribute('class','global__table_first-cell');
    td1.textContent = '№';

    tr.append(td1);

    const td2 = document.createElement('td');
    td2.setAttribute('class', 'global__table_cell');
    td2.textContent = 'Users';

    tr.append(td2);

    const td3 = document.createElement('td');
    td3.setAttribute('class', 'global__table_cell');
    td3.textContent = 'Email';

    tr.append(td3);
    return tr;
}

function createTable() {
    const table = document.createElement('TABLE');
    table.setAttribute('class','global__table');

    const thead = document.createElement('THEAD');

    const tr = document.createElement('TR');
    tr.setAttribute('class', 'global__table_main-row');

    const td1 = document.createElement('td');
    td1.setAttribute('class','global__table_first-cell');
    td1.textContent = '№';

    tr.append(td1);

    const td2 = document.createElement('td');
    td2.setAttribute('class', 'global__table_cell');
    td2.textContent = 'Users';

    tr.append(td2);

    const td3 = document.createElement('td');
    td3.setAttribute('class', 'global__table_cell');
    td3.textContent = 'Email';

    tr.append(td3);

    thead.append(tr);

    table.append(thead);

    const tbody = document.createElement('TBODY');
    tbody.setAttribute('id','tbody');
    table.append(tbody);

    return table;
}

function createChat() {
    const main = document.getElementById('main2');

    main.lastChild.remove();

    const chat = document.createElement('div');
    chat.setAttribute('class', 'global__chat');

    const chatWindow = document.createElement('div');
    chatWindow.setAttribute('class','global__chat_window');

    chat.append(chatWindow);

    const form = document.createElement('form');
    form.setAttribute('class','global__chat_form');

    const input1 = document.createElement('input');
    input1.setAttribute('class', 'global__chat_form-input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', 'Write here...');

    form.append(input1);

    const input2 = document.createElement('input');
    input2.setAttribute('class', 'button-up__item button-up__item_send');
    input2.setAttribute('type', 'submit');
    input2.setAttribute('value', 'SEND');
    input2.setAttribute('id', 'send');

    form.append(input2);

    chat.append(form);

    main.append(chat);
}

function goToAccountPage () {
    let parent = document.getElementById("main");
    let child = document.getElementById("id1");
    parent.removeChild(child);

    const header = document.createElement('HEADER');
    header.setAttribute('class','global');

    const div = document.createElement('DIV');
    div.setAttribute('class','global__info global__info_position global__info_style');

    const p1 = document.createElement('P');
    p1.setAttribute('id','name_info');
    const p2 = document.createElement('P');
    p2.setAttribute('id','email_info');

    div.append(p1);
    div.append(p2);

    header.append(div);

    const button = document.createElement('BUTTON');
    button.setAttribute('class', 'button-up__item button-up__item_size button-up__item_size-header');
    button.setAttribute('id', 'logOut');
    button.textContent = 'LOG OUT';

    header.append(button);

    document.body.append(header);

    const main = document.createElement('MAIN');
    main.setAttribute('class', 'global');
    main.setAttribute('id','main2');

    const aside = document.createElement('ASIDE');
    aside.setAttribute('class','global__info global__info_position');

    const buttonAside1 = document.createElement('button');
    buttonAside1.setAttribute('class','button-up__item button-up__item_size');
    buttonAside1.textContent = 'Users';
    buttonAside1.setAttribute('id', 'users');

    aside.append(buttonAside1);

    const buttonAside2 = document.createElement('button');
    buttonAside2.setAttribute('class','button-up__item button-up__item_size');
    buttonAside2.textContent = 'Chat';
    buttonAside2.setAttribute('id', 'chat');

    aside.append(buttonAside2);

    main.append(aside);

    const table = createTable();

    main.append(table);

    document.body.append(main);
}

function draw1Page() {
    const form = document.createElement('div');
    form.setAttribute('id','id1');
    form.setAttribute('class', 'form');

    const buttonUp = document.createElement('div');
    buttonUp.setAttribute('class','button-up');

    const logIn = document.createElement('button');
    logIn.setAttribute('id','logIn');
    logIn.setAttribute('class','button-up__item');
    logIn.textContent = 'Log In';

    const signIn = document.createElement('button');
    signIn.setAttribute('id','signIn');
    signIn.setAttribute('class','button-up__item');
    signIn.textContent = 'Sign In';

    buttonUp.append(logIn);
    buttonUp.append(signIn);

    form.append(buttonUp);

    const enterDataId = document.createElement('div');
    enterDataId.setAttribute('id','enterDataId');
    enterDataId.setAttribute('class','enter-data');

    const enterData1 = document.createElement('div');
    enterData1.setAttribute('class', 'enter-data__item');

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'email');
    label1.textContent = 'Email';

    const input1 = document.createElement('input');
    input1.setAttribute('type','text');
    input1.setAttribute('id','email');

    enterData1.append(label1);
    enterData1.append(input1);

    enterDataId.append(enterData1);

    const enterData2 = document.createElement('div');
    enterData2.setAttribute('class', 'enter-data__item');

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'password');
    label2.textContent = 'Password';

    const input2 = document.createElement('input');
    input2.setAttribute('type','password');
    input2.setAttribute('id','password');

    enterData2.append(label2);
    enterData2.append(input2);

    enterDataId.append(enterData2);

    const input = document.createElement('input');
    input.setAttribute('type','submit');
    input.setAttribute('id','submitLogIn');
    input.setAttribute('class','button-up__item button-up__item_submit');
    input.setAttribute('value','SUBMIT');

    enterDataId.append(input);

    form.append(enterDataId);

    document.body.append(form);
}

function drawTable() {
    const main = document.getElementById('main2');

    main.lastChild.remove();

    const table = createTable();

    main.append(table);
}

function logOut() {
    document.body.innerHTML = '';
    draw1Page();
}

function goTo4Page() {
    const child = document.createElement('DIV');
    child.classList = 'enter-data__item';
    child.setAttribute('id', 'temp');

    const label = document.createElement('LABEL');
    label.setAttribute('for','configPassword');
    label.textContent = 'Config password';
    child.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type','password');
    input.setAttribute('id','configPassword');
    child.appendChild(input);

    const submitLogIn = document.getElementById('submitLogIn');
    submitLogIn.before(child);
    submitLogIn.setAttribute('id','submitSignIn');
}