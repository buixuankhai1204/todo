function insertRowTable(parrent, data) {
    var tr = $("<tr>");
    var name = $("<td>").text(data['Name']);
    var email = $("<td>").text(data['Email']);
    var companyName = $("<td>").text(data['CompanyName']);
    var countryCode = $("<td>").text(data['CountryCode']);
    var phoneNumber = $("<td>").text(data['PhoneNumber']);
    var content = $("<td>").text(data['Content']);
    var isActive = "";
    var inquiryType = $("<td>").text(data['InquiryType']);

    if (data['Check'] === '1') {
        isActive = "Checked"
    } else if (data['Check'] === '0') {
        isActive = "Not Check"
    }
    var checkContent = $("<td>");
    checkContent.attr("id", `check${data['id']}`);
    var checkContentValue= checkContent.text(isActive)
    // checkContent.setAttribute("id", `check${data['id']}`)
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", data['id']);
    checkbox.setAttribute("name", "type");
    var detailLink = document.createElement("a");
    detailLink.setAttribute("href", `http://localhost:3000/list/${data['id']}`);
    detailLink.text = "detail"
    tr.append(name, email, companyName, countryCode, phoneNumber, content, checkContent, inquiryType, checkbox, detailLink);

    parrent.append(tr);
}
