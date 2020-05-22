import Route from '@ember/routing/route';
import { action } from '@ember/object';
import $ from 'jquery';

export default class DemoRoute extends Route {

    @action
    submit() {

        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let grade = $('#grade').val();

        $.ajax({
            url: 'https://localhost/schnaeppchen/php/details.php',
            type: 'post',
            datatype: 'json',
            data: { 'firstName': firstName, 'lastName': lastName, 'grade': grade },
            success: function(data, status, xhr) {
                alert(data);
                //let firstName = JSON.parse(data)[2].firstName;
                //let lastName = JSON.parse(data)[2].lastName;
                //let grade = JSON.parse(data)[2].grade;
                let arr = JSON.parse(data);
                let firstName = arr[0][0];
                let lastName = arr[0][1];
                let grade = arr[0][2];
                //$('#runnerInfo').append(data);
                $('#runnerInfo').append("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + grade + "</td></tr>");
            },
            error: function(xhr, status, error) {
                $('#runnerInfo').append("<tr><td>Fehler</td><td>Fehler</td><td>Fehler</td></tr>");
            }

        })

    }


    @action
    show() {

        $.ajax({

        })
    }



}