// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let guestArr: string[] = ['Kamran Tassori', 'sir Zia',' sir Hamza']

let canNotAttend:string = 'Kamran Tassori'

console.log(canNotAttend + ' ' + 'cannot attend your dinner' )

let newGuest:string ="Daniyal nagori"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest
console.log(guestArr)

 guestArr.map((item)=>
console.log(`Dear ${item}, you are invited to a dinner party`)
)






