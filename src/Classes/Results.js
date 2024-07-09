class Results {
  constructor(name, eng, tel, hin, mat, sci, soc) {
    // console.log(`hi  pabans`)
    this.person = name;
    this.engMarks = eng;
    this.telMarks = tel;
    this.hinMarks = hin;
    this.matMarks = eng;
    this.sciMarks = sci;
    this.socMarks = soc;

    console.log(name, eng, tel, hin, mat, sci, soc);
  }
  //    no need let in defining function in clsses
  yourResult = () => {
    let passMarks = 35;
    if (
      this.engMarks >= passMarks &&
      this.telMarks >= passMarks &&
      this.matMarks >= passMarks &&
      this.hinMarks >= passMarks &&
      this.sciMarks >= passMarks &&
      this.socMarks >= passMarks
    ) {
        console.log(`${this.person} is Passed!`)
    }
    else{
        console.log(`${this.person} is Failed!`)
    }
  };
}
export default Results;
