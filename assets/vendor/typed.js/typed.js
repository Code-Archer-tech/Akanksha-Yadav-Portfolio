class TypedText {
  constructor(el, words, typeSpeed = 100, backSpeed = 60, loop = true) {
    this.el = typeof el === "string" ? document.querySelector(el) : el;
    this.words = words;
    this.typeSpeed = typeSpeed;
    this.backSpeed = backSpeed;
    this.loop = loop;
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = this.txt;

    let speed = this.isDeleting ? this.backSpeed : this.typeSpeed;

    if (!this.isDeleting && this.txt === fullTxt) {
      speed = 1000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      speed = 500;
    }

    if (!this.loop && this.wordIndex >= this.words.length) return;

    setTimeout(() => this.type(), speed);
  }
}

// ✨ USAGE EXAMPLE:
// new TypedText("#typed", ["Akanksha Yadav", "HR Professional", "Talent Manager"]);
