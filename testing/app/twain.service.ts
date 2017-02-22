export class TwainService {
  public quote : string;
  public QuotesList: string[] = ["Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
                                 "If you tell the truth, you don't have to remember anything.",
                                 "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.",
                                 "I have never let my schooling interfere with my education.",
                                 "Get your facts first, and then you can distort them as much as you please.",
                                 "Reader, suppose you were an idiot. And suppose you were a member of Congress. But I repeat myself.",
                                 "Always do right. This will gratify some people and astonish the rest.",
                                 "The man who does not read good books has no advantage over the man who cannot read them.",
                                 "Clothes make the man. Naked people have little or no influence on society.",
                                 "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't."
                                 ];
  public getQuote() {

    function getRandomInt(min: any, max: any) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const i = getRandomInt(0, this.QuotesList.length);
    this.quote = this.QuotesList[i];
    return this.quote;
  }
}
