function insertRowTable(parrent, data) {
    var tr = $("<tr>");
    var name = $("<td>").text(data['Name']);
    var email = $("<td>").text(data['Status']);
    var companyName = $("<td>").text(data['CompanyName']);
    var countryCode = $("<td>").text(data['CountryCode']);
    var phoneNumber = $("<td>").text(data['PhoneNumber']);
    var content = $("<td>").text(data['Content']);
    tr.append(name, email, companyName, countryCode, phoneNumber, content);
    parrent.append(tr);
}
