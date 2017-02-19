from tkinter import Tk

def makeHTMLPage():
    movie = year = href = img_source = description = None
    while movie!="EXIT":
        movie = input("Enter the movie name: ")
        href = "../movies/"+input("Enter the href: ")+".html"
        year = input("Enter year: ")
        img_source = "../img/"+input("Enter img source: ")+".jpg"
        description = input("Enter a description: ")
        html_doc = """  <!DOCTYPE html>
                    <html lang="en">
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Disney | Request</title>
                        <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                        crossorigin="anonymous">
                        <link rel="icon" href="../img/crown.png">
                        <link rel="stylesheet" href="../style.css"/>
                      </head>

                      <body onload="loadVideo('"""+movie+"""')">
                        <header>
                          <div class="container">
                            <a href="../index.html">
                              <img src="../img/logo2.png"/>
                            </a>
                            <nav>
                              <ul>
                                <li><a href="../index.html">HOME</a></li>
                                <li><a class="current" href="../code/movies.html">MOVIES</a></li>
                                <li><a href="../code/request.html">REQUEST MOVIE</a></li>
                              </ul>
                              <img id="TandD" src="../img/tandd.gif" alt="Tip and Dash">

                            </nav>
                        </div>
                        </header>

                        <section id="film">
                        </section>

                        <article>
                          <div class="container">
                            <a href='"""+href+"""'><img src='"""+img_source+"""' alt='"""+movie+"""'></a>
                            <h4><span>"""+movie+"""</span> / """+year+""" / Rating: 5/5</h4>
                            <p>"""+description+"""</p>
                          </div>
                        </article>

                        <section id="moviesDisplay">
                          <div class="container">
                            <hr>
                            <h3>TOP 5 MOVIE PICKS</h3>
                            <hr>
                            <a href="the-little-mermaid-1.html"><img src="../img/TheLittleMermaid1.jpg" alt"The Little Mermaid"></a>
                            <a href="big-hero-6.html"><img src="../img/BigHero6.jpg" alt"Big Hero 6"></a>
                            <a href="mulan-1.html"><img src="../img/Mulan1.jpg" alt"Mulan"></a>
                            <a href="toy-story-1.html"><img src="../img/ToyStory1.jpg" alt"Toy Story"></a>
                            <a href="finding-nemo-1.html"><img src="../img/FindingNemo1.jpg" alt"Finding Nemo"></a>

                          </div>
                        </section>


                        <footer>
                          <div class="container">
                            <br>
                            <h4>Mejia Web Design, Copyright © 2017</h4>
                            <br>
                          </div>
                        </footer>
                        <script src="../script.js"></script>
                      </body>
                    </html>
                    \n\n\n\n
                    """
        if movie != '' and year !='' and href!='' and img_source!='' and description !='':
            print(html_doc)
            copy = Tk()
            copy.withdraw()
            copy.clipboard_clear()
            copy.clipboard_append(html_doc)
            copy.destroy()
            print("\""+movie+"\""+": ["+"\""+href+"\", \""+img_source+"\"],")

def D():
    movie=href=img_source=None
    while movie!="EXIT" and href!="EXIT" and img_source!="EXIT":
        movie = input("Enter the movie name: ")
        href = "../movies/"+input("Enter the href: ")+".html"
        img_source = "../img/"+input("Enter img source: ")+".jpg"
        dictionary = "\""+movie+"\": ["+"\""+href+"\", \""+img_source+"\"],"
        print(dictionary)
        copy = Tk()
        copy.withdraw()
        copy.clipboard_clear()
        copy.clipboard_append(dictionary)
        
    

if __name__=="__main__":
    makeHTMLPage()
