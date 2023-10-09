function insertRowTable(parrent, data) {
    var tr = $("<tr>");
    var name = $("<td>").text(data['name']);
    var email = $("<td>").text(data['status']);
    var companyName = $("<td>").text(data['companyName']);
    var countryCode = $("<td>").text(data['countryCode']);
    var phoneNumber = $("<td>").text(data['phoneNumber']);
    var content = $("<td>").text(data['content']);
    tr.append(name, email, companyName, countryCode, phoneNumber, content);
    parrent.append(tr);
}
