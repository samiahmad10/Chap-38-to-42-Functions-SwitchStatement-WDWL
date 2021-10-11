function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    document.write(str)


    var count = 0


    switch (str) {
        case 'a':
            count++;

        case 'A':
          count++
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':


      return 1;
            default:
                return 0;
        }
}

    findOccurrences();
