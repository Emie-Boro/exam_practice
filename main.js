const subjects = document.getElementById('subjects')
let examinerSubject = document.getElementById('examiner-subjects')
const examiner = document.getElementById('examiner')
const sheetRest = document.createElement('button')
sheetRest.textContent = 'Reset'
sheetRest.addEventListener('click', () =>{
    sheetRest = window.location.reload()
})

const examinerBtn = document.getElementById('examiner-Btn')
examinerBtn.addEventListener('click', () => {
    if(examiner.value === '' || subjects.value == 'subjects') {
        alert('!Input your name and/or Select a Subject')
        // examinerBtn.remove()
        
        // document.getElementById('examiner').disabled = true;
    } else if (examiner.value != '' || subjects.value !== 'subjects'){
        const examinerName = document.createElement('h2')
        examinerName.textContent = `${examiner.value}, your Exam has started`
        const examinerDiv = document.getElementById('examiner-div')
        examinerDiv.append(examinerName)
        examiner.remove()
        examinerBtn.remove()
        examinerSubject.remove()
        document.getElementById('examReset').appendChild(sheetRest)
        if(subjects.value == 'english') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = english_demo[Math.floor(Math.random() * english_demo.length)]
            const rand2 = english_demo[Math.floor(Math.random() * english_demo.length)]
            const rand3 = english_demo[Math.floor(Math.random() * english_demo.length)]
            const rand4 = english_demo[Math.floor(Math.random() * english_demo.length)]
            const rand5 = english_demo[Math.floor(Math.random() * english_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'maths') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = maths_demo[Math.floor(Math.random() * maths_demo.length)]
            const rand2 = maths_demo[Math.floor(Math.random() * maths_demo.length)]
            const rand3 = maths_demo[Math.floor(Math.random() * maths_demo.length)]
            const rand4 = maths_demo[Math.floor(Math.random() * maths_demo.length)]
            const rand5 = maths_demo[Math.floor(Math.random() * maths_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'biology') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = biology_demo[Math.floor(Math.random() * biology_demo.length)]
            const rand2 = biology_demo[Math.floor(Math.random() * biology_demo.length)]
            const rand3 = biology_demo[Math.floor(Math.random() * biology_demo.length)]
            const rand4 = biology_demo[Math.floor(Math.random() * biology_demo.length)]
            const rand5 = biology_demo[Math.floor(Math.random() * biology_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        }else if(subjects.value == 'accounting') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = accounting_demo[Math.floor(Math.random() * accounting_demo.length)]
            const rand2 = accounting_demo[Math.floor(Math.random() * accounting_demo.length)]
            const rand3 = accounting_demo[Math.floor(Math.random() * accounting_demo.length)]
            const rand4 = accounting_demo[Math.floor(Math.random() * accounting_demo.length)]
            const rand5 = accounting_demo[Math.floor(Math.random() * accounting_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'economics') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = economics_demo[Math.floor(Math.random() * economics_demo.length)]
            const rand2 = economics_demo[Math.floor(Math.random() * economics_demo.length)]
            const rand3 = economics_demo[Math.floor(Math.random() * economics_demo.length)]
            const rand4 = economics_demo[Math.floor(Math.random() * economics_demo.length)]
            const rand5 = economics_demo[Math.floor(Math.random() * economics_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'chemistry') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = chemistry_demo[Math.floor(Math.random() * chemistry_demo.length)]
            const rand2 = chemistry_demo[Math.floor(Math.random() * chemistry_demo.length)]
            const rand3 = chemistry_demo[Math.floor(Math.random() * chemistry_demo.length)]
            const rand4 = chemistry_demo[Math.floor(Math.random() * chemistry_demo.length)]
            const rand5 = chemistry_demo[Math.floor(Math.random() * chemistry_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'marketing') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = marketing_demo[Math.floor(Math.random() * marketing_demo.length)]
            const rand2 = marketing_demo[Math.floor(Math.random() * marketing_demo.length)]
            const rand3 = marketing_demo[Math.floor(Math.random() * marketing_demo.length)]
            const rand4 = marketing_demo[Math.floor(Math.random() * marketing_demo.length)]
            const rand5 = marketing_demo[Math.floor(Math.random() * marketing_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'commerce') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = commerce_demo[Math.floor(Math.random() * commerce_demo.length)]
            const rand2 = commerce_demo[Math.floor(Math.random() * commerce_demo.length)]
            const rand3 = commerce_demo[Math.floor(Math.random() * commerce_demo.length)]
            const rand4 = commerce_demo[Math.floor(Math.random() * commerce_demo.length)]
            const rand5 = commerce_demo[Math.floor(Math.random() * commerce_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'physics') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = physics_demo[Math.floor(Math.random() * physics_demo.length)]
            const rand2 = physics_demo[Math.floor(Math.random() * physics_demo.length)]
            const rand3 = physics_demo[Math.floor(Math.random() * physics_demo.length)]
            const rand4 = physics_demo[Math.floor(Math.random() * physics_demo.length)]
            const rand5 = physics_demo[Math.floor(Math.random() * physics_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'government') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = government_demo[Math.floor(Math.random() * government_demo.length)]
            const rand2 = government_demo[Math.floor(Math.random() * government_demo.length)]
            const rand3 = government_demo[Math.floor(Math.random() * government_demo.length)]
            const rand4 = government_demo[Math.floor(Math.random() * government_demo.length)]
            const rand5 = government_demo[Math.floor(Math.random() * government_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'crs') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = crs_demo[Math.floor(Math.random() * crs_demo.length)]
            const rand2 = crs_demo[Math.floor(Math.random() * crs_demo.length)]
            const rand3 = crs_demo[Math.floor(Math.random() * crs_demo.length)]
            const rand4 = crs_demo[Math.floor(Math.random() * crs_demo.length)]
            const rand5 = crs_demo[Math.floor(Math.random() * crs_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'furthermaths') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = furthermaths_demo[Math.floor(Math.random() * furthermaths_demo.length)]
            const rand2 = furthermaths_demo[Math.floor(Math.random() * furthermaths_demo.length)]
            const rand3 = furthermaths_demo[Math.floor(Math.random() * furthermaths_demo.length)]
            const rand4 = furthermaths_demo[Math.floor(Math.random() * furthermaths_demo.length)]
            const rand5 = furthermaths_demo[Math.floor(Math.random() * furthermaths_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'literature') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = literature_demo[Math.floor(Math.random() * literature_demo.length)]
            const rand2 = literature_demo[Math.floor(Math.random() * literature_demo.length)]
            const rand3 = literature_demo[Math.floor(Math.random() * literature_demo.length)]
            const rand4 = literature_demo[Math.floor(Math.random() * literature_demo.length)]
            const rand5 = literature_demo[Math.floor(Math.random() * literature_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        } else if(subjects.value == 'civic') {
            const subjectlist_1 = document.createElement('p')
            const subjectlist_2 = document.createElement('p')
            const subjectlist_3 = document.createElement('p')
            const subjectlist_4 = document.createElement('p')
            const subjectlist_5 = document.createElement('p')

             
            const a_buttonRand1 = document.createElement('button')
            const b_buttonRand1 = document.createElement('button')
            const c_buttonRand1 = document.createElement('button')
            const d_buttonRand1 = document.createElement('button')

            const a_buttonRand2 = document.createElement('button')
            const b_buttonRand2 = document.createElement('button')
            const c_buttonRand2 = document.createElement('button')
            const d_buttonRand2 = document.createElement('button')

            const a_buttonRand3 = document.createElement('button')
            const b_buttonRand3 = document.createElement('button')
            const c_buttonRand3 = document.createElement('button')
            const d_buttonRand3 = document.createElement('button')

            const a_buttonRand4 = document.createElement('button')
            const b_buttonRand4 = document.createElement('button')
            const c_buttonRand4 = document.createElement('button')
            const d_buttonRand4 = document.createElement('button')

            const a_buttonRand5 = document.createElement('button')
            const b_buttonRand5 = document.createElement('button')
            const c_buttonRand5 = document.createElement('button')
            const d_buttonRand5 = document.createElement('button')

            const sheetAnswer1 = document.createElement('h3')
            const sheetAnswer2 = document.createElement('h3')
            const sheetAnswer3 = document.createElement('h3')
            const sheetAnswer4 = document.createElement('h3')
            const sheetAnswer5 = document.createElement('h3')


            const rand1 = civic_demo[Math.floor(Math.random() * civic_demo.length)]
            const rand2 = civic_demo[Math.floor(Math.random() * civic_demo.length)]
            const rand3 = civic_demo[Math.floor(Math.random() * civic_demo.length)]
            const rand4 = civic_demo[Math.floor(Math.random() * civic_demo.length)]
            const rand5 = civic_demo[Math.floor(Math.random() * civic_demo.length)]

            a_buttonRand1.textContent = rand1.A
            b_buttonRand1.textContent = rand1.B
            c_buttonRand1.textContent = rand1.C
            d_buttonRand1.textContent = rand1.D

            a_buttonRand2.textContent = rand2.A
            b_buttonRand2.textContent = rand2.B
            c_buttonRand2.textContent = rand2.C
            d_buttonRand2.textContent = rand2.D

            a_buttonRand3.textContent = rand3.A
            b_buttonRand3.textContent = rand3.B
            c_buttonRand3.textContent = rand3.C
            d_buttonRand3.textContent = rand3.D

            a_buttonRand4.textContent = rand4.A
            b_buttonRand4.textContent = rand4.B
            c_buttonRand4.textContent = rand4.C
            d_buttonRand4.textContent = rand4.D

            a_buttonRand5.textContent = rand5.A
            b_buttonRand5.textContent = rand5.B
            c_buttonRand5.textContent = rand5.C
            d_buttonRand5.textContent = rand5.D


            subjectlist_1.textContent = rand1.sheet
            subjectlist_1.appendChild(a_buttonRand1)
            subjectlist_1.appendChild(b_buttonRand1)
            subjectlist_1.appendChild(c_buttonRand1)
            subjectlist_1.appendChild(d_buttonRand1)
            subjectlist_1.appendChild(sheetAnswer1)


            subjectlist_2.textContent = rand2.sheet
            subjectlist_2.appendChild(a_buttonRand2)
            subjectlist_2.appendChild(b_buttonRand2)
            subjectlist_2.appendChild(c_buttonRand2)
            subjectlist_2.appendChild(d_buttonRand2)
            subjectlist_2.appendChild(sheetAnswer2)

            subjectlist_3.textContent = rand3.sheet
            subjectlist_3.appendChild(a_buttonRand3)
            subjectlist_3.appendChild(b_buttonRand3)
            subjectlist_3.appendChild(c_buttonRand3)
            subjectlist_3.appendChild(d_buttonRand3)
            subjectlist_3.appendChild(sheetAnswer3)

            subjectlist_4.textContent = rand4.sheet
            subjectlist_4.appendChild(a_buttonRand4)
            subjectlist_4.appendChild(b_buttonRand4)
            subjectlist_4.appendChild(c_buttonRand4)
            subjectlist_4.appendChild(d_buttonRand4)
            subjectlist_4.appendChild(sheetAnswer4)


            subjectlist_5.textContent = rand5.sheet
            subjectlist_5.appendChild(a_buttonRand5)
            subjectlist_5.appendChild(b_buttonRand5)
            subjectlist_5.appendChild(c_buttonRand5)
            subjectlist_5.appendChild(d_buttonRand5)
            subjectlist_5.appendChild(sheetAnswer5)
            

            const examSheet1 = document.getElementById('examSheet1')
            const examSheet2 = document.getElementById('examSheet2')
            const examSheet3 = document.getElementById('examSheet3')
            const examSheet4 = document.getElementById('examSheet4')
            const examSheet5 = document.getElementById('examSheet5')

            examSheet1.append(subjectlist_1)
            examSheet2.append(subjectlist_2)
            examSheet3.append(subjectlist_3)
            examSheet4.append(subjectlist_4)
            examSheet5.append(subjectlist_5)
            
            
            a_buttonRand1.addEventListener('click',() =>{
                if(a_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            b_buttonRand1.addEventListener('click',() =>{
                if(b_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            c_buttonRand1.addEventListener('click',() =>{
                if(c_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })
            d_buttonRand1.addEventListener('click',() =>{
                if(d_buttonRand1.textContent == rand1.answer){
                    sheetAnswer1.textContent = 'Correct';
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }else{
                    sheetAnswer1.textContent = 'Incorrect'
                    a_buttonRand1.disabled = true;
                    b_buttonRand1.disabled = true;
                    c_buttonRand1.disabled = true;
                    d_buttonRand1.disabled = true;
                }
            })




            a_buttonRand2.addEventListener('click',() =>{
                if(a_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect'
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            b_buttonRand2.addEventListener('click',() =>{
                if(b_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            c_buttonRand2.addEventListener('click',() =>{
                if(c_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })
            d_buttonRand2.addEventListener('click',() =>{
                if(d_buttonRand2.textContent == rand2.answer){
                    sheetAnswer2.textContent = 'Correct';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }else{
                    sheetAnswer2.textContent = 'Incorrect';
                    a_buttonRand2.disabled = true;
                    b_buttonRand2.disabled = true;
                    c_buttonRand2.disabled = true;
                    d_buttonRand2.disabled = true;
                }
            })




            a_buttonRand3.addEventListener('click',() =>{
                if(a_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            b_buttonRand3.addEventListener('click',() =>{
                if(b_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            c_buttonRand3.addEventListener('click',() =>{
                if(c_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })
            d_buttonRand3.addEventListener('click',() =>{
                if(d_buttonRand3.textContent == rand3.answer){
                    sheetAnswer3.textContent = 'Correct';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }else{
                    sheetAnswer3.textContent = 'Incorrect';
                    a_buttonRand3.disabled = true;
                    b_buttonRand3.disabled = true;
                    c_buttonRand3.disabled = true;
                    d_buttonRand3.disabled = true;
                }
            })




            a_buttonRand4.addEventListener('click',() =>{
                if(a_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            b_buttonRand4.addEventListener('click',() =>{
                if(b_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            c_buttonRand4.addEventListener('click',() =>{
                if(c_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })
            d_buttonRand4.addEventListener('click',() =>{
                if(d_buttonRand4.textContent == rand4.answer){
                    sheetAnswer4.textContent = 'Correct';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }else{
                    sheetAnswer4.textContent = 'Incorrect';
                    a_buttonRand4.disabled = true;
                    b_buttonRand4.disabled = true;
                    c_buttonRand4.disabled = true;
                    d_buttonRand4.disabled = true;
                }
            })




            a_buttonRand5.addEventListener('click',() =>{
                if(a_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct';
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            b_buttonRand5.addEventListener('click',() =>{
                if(b_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            c_buttonRand5.addEventListener('click',() =>{
                if(c_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    a_buttonRand5.disabled = true;
                    b_buttonRand5.disabled = true;
                    c_buttonRand5.disabled = true;
                    d_buttonRand5.disabled = true;
                }
            })
            d_buttonRand5.addEventListener('click',() =>{
                if(d_buttonRand5.textContent == rand5.answer){
                    sheetAnswer5.textContent = 'Correct'
                    d_buttonRand5.disabled = true
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }else {
                    sheetAnswer5.textContent = 'Incorrect'
                    b_buttonRand5.disabled = true
                    c_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                    a_buttonRand5.disabled = true
                }
            })
        }
    } 
    
})
// This is a question upload area, update, delete, and modify


let accounting_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
] 
let biology_demo = [
    {sheet:'What are plants that grows on other plants called ?',answer:'Epiphytes',A:'Saprophyte',B:'Epiphytes',C:'Euglena', D:'Flagella'},
    {sheet:'How many Adenosine triphosphate (ATP) are released during external respiration?',answer:'Two',A:'Twenty-Six',B:'One',C:'Twenty-four', D:'Two'},
    {sheet:'What is the Cytoplasm in unicellular organisms used for?',answer:'Excretion',A:'Excretion',B:'Movement',C:'Respiration',D:'Transpiration'},
    {sheet:'What is the Organelle used for movement in Amoeba?',answer:'Flagella',A:'Flagella',B:'Pseudopodium',C:'Leg', D:'Cytoplasm'},
    // {sheet:'Which part of the body is the scapula located?',answer:'',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'Which of these genus is common to birds?',answer:'Aves',A:'Pices',B:'homo',C:'Aves',D:'Crusteacean'},
    // {sheet:''}
]
let chemistry_demo = [
    {sheet:'Which of the following substance is a mixture?',answer:'B. sea-water',A:'A. granulated sugar',B:'B. sea-water',C:'C. sodium chloride', D:'D. iron-fillings'},
    {sheet:'Which of the following species determines the chemical properties of an atom?',answer:'A. Electron',A:'A. Electron',B:'B. Neutron',C:'C. Nucleus',D:'Proton'},
    {sheet:'A brand of ink containing cobalt (II), copper (II) and iron (II) ions can best be separated into its various components by', answer:'Chromatography',A:'fractional crystallization',B:'fractional distillation',C:'C. sublimation',D:'D. chromotography'},
    {sheet:'Which of the following is a physical change?',answer:'C. The dissolution of sodium chloride in water',A:'A. The bubbling of chlorine into water',B:'The bubbling of chlorine into a jar containing hydrogen',C:'C. The dissolution of sodium chloride in water',D:'D. The passing of steam over heated iron'},
    {sheet:'Which of the following substances is not a homogenous mixture?',answer:'D. writing ink',A:'A. filtered sea water',B:'B. soft drink',C:'C. flood water',D:'D. writing ink'},
    {sheet:'There is a large temperature interval between the melting point and the boiling point of a metal because?',answer:'melting does not break the metallic bonds but boiling does',A:'Metals have very high melting point',B:'B. metals conduct heat very rapidly',C:'C. melting does not break the metallic bonds but boiling does',D:'the crystal lattice of metals is easily broken'},
    {sheet:'The dissolution of common salt in water is a physical change because?',answer:'C. heat is not generated during mixing',A:'A. the salt can be obtained by crystallization',B:'B. the salt can be recovered by the evaporation',C:'C. heat is not generated during mixing',D:'D. the solution will not boil at 100 oC'},
    {sheet:'Which of the following substances is a mixture?',answer:'B. bronze',A:'A. sulphur powder',B:'B. bronze',C:'C. distilled water',D:'D. ethanol'},
    {sheet:'Helium atoms are chemically unreactive because?',answer:'D. the outer electron shell is completely filled',A:'A. there are no electrons around the nucleus',B:'B. the number of protons equals the number of electrons',C:'C. there are equal number of protons and neutrons in the nucleus',D:'D. the outer electron shell is completely filled'},
] 
let civic_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let commerce_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let crs_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let economics_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let english_demo = [
    {sheet:`Who is the President of Nigeria?`,answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let furthermaths_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let government_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let literature_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let marketing_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let maths_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
]
let physics_demo = [
    {sheet:'Who is the President of Nigeria?',answer:'Buhari',A:'Goodluck',B:'Obasanjo',C:'Peter Obi', D:'Buhari'},
    {sheet:'I _______  late and you are not around',answer:'came',A:'came',B:'go',C:'come', D:'come'},
    {sheet:'We are _______  for and you are not around',answer:'preparing',A:'preparing',B:'go',C:'went',D:'went'},
    {sheet:'What is your name?',answer:'Emie',A:'Emie',B:'Blessing',C:'Francis', D:'francis'},
    {sheet:'Enthusiastic',answer:'enTHusiatic',A:'ENthusiastic',B:'enTHusiatic',C:'enthusiaSTIC', D:'enthusiastic'},
    {sheet:'I _______  home from work',answer:'arrived',A:'reached',B:'go',C:'went',D:'arrived'},
] 
