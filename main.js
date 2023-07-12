function Geeks() {
    let element_name =
        document.getElementsByTagName("H2")[0];

        console.log(document.getElementsByTagName("H2"))[0];

    let attribute =
        element_name.getAttributeNode("class").value;

    document.getElementById("result").innerHTML
        = attribute;
}