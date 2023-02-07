function Article(name, prise) {
    this.name = name;
    this.prise = prise;
}

let articles = [
    {name: "schampoo", prise: 4.99},
    {name: "zahnpasta", prise: 3.99},
    {name: "deodorant", prise: 2.99},
    {name: "seife", prise: 1.99},
    {name: "creme", prise: 2.49}
]

var sum_end = 0;

$(function () {
    $(".form_item").click(function(evt) {
      var input_number = $(evt.target).data("check")
      var selector_input = "input[data-check=" + input_number + "]";
      var selector_select = "select[data-select=" + input_number + "]";
      if ($(selector_input).prop("checked")) {
        $(selector_select).prop("disabled", false)
      } else {
        $(selector_select).prop("disabled", true)
      }
    })
})

$(function () {
    $(".form_item").change(function(evt) {
        var selector_number = $(evt.target).data("select");
        var selector_select = "select[data-select=" + selector_number + "]";
        var selector_prise = "input[data-prise=" + selector_number + "]";
        var selector_article_number = "input[data-number=" + selector_number + "]";
        var selector_sum = "input[data-sum=" + selector_number + "]";
        if ($(selector_select).prop("disabled", false)) {
            if ($(selector_select).prop("value") != undefined) {
                var option_value = $(selector_select).prop("value");
                
                console.log(option_value)
                for(var key in articles) {
                    if (articles[key].name == option_value) {
                        var prise = articles[key].prise;
                        console.log(prise);
                        $(selector_prise).val(prise);
                    }
                }
                var number = 1;
                $(selector_article_number).val(number);
                
                sum = prise * number;
                sum_end = sum_end + sum;
                $(selector_sum).val(sum);

                $("#sum").val(sum_end);
            }
        }
    })
})



