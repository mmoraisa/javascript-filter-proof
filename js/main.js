"use strict";

/* O código desenvolvido poderá utilizar apenas Javascript e jQuery(opcional).
   Todas as alterações efetuadas no código existente serão avaliadas,
   portanto, sinta-se à vontade para refatorar e melhorar qualquer trecho */

var control = {
    init: function(){
        control.items.draw(control.items.load());
    },
    items: {
        draw: function(items){
            $('section#content > .items-list').html(
                $.map(items,function(item){
                    return '<div class="item" item-id="' + item.id + '">\
                                <img src="' + item.image + '"/>\
                                <div class="name">' + item.name + '</div>\
                                <div class="description">' + item.description + '</div>\
                            </div>'
                }).join('')
            );
        },
        load: function(){

            /* todo: alterar essa function para retornar uma Promise,
                que se resolve passando o array de itens */

            var fakeItems = [
                {
                    id: 1,
                    name: 'Beatriz',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis metus, imperdiet volutpat pulvinar ut, gravida quis est. Nam venenatis elit vel diam luctus mattis. Nullam vel tortor ultricies, efficitur orci non, blandit nunc. Maecenas hendrerit erat a cursus congue. Integer lacinia justo vel erat sollicitudin, a commodo ligula varius.',
                    image: 'img/1.jpg'
                },
                {
                    id: 2,
                    name: 'Laura',
                    description: 'Cras lobortis enim at vehicula lobortis. Sed vitae felis sed justo euismod pulvinar sed non neque. Cras condimentum dui commodo justo semper dapibus. Maecenas efficitur ipsum purus, sed vulputate lacus semper quis. Donec ac viverra ante, non ullamcorper tortor. Phasellus ut rutrum diam. Cras eget feugiat est, ac finibus libero.',
                    image: 'img/2.jpg'
                },
                {
                    id: 3,
                    name: 'Maria',
                    description: 'Curabitur orci felis, pharetra eget fringilla non, aliquam at ante. Aenean in metus tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel tortor eget urna accumsan hendrerit vel sit amet dolor. Sed venenatis nunc semper purus aliquam semper. Praesent sed finibus elit.',
                    image: 'img/3.jpg'
                },
                {
                    id: 4,
                    name: 'Júlia',
                    description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis lobortis metus, sed tempor diam. Nunc id nisi sagittis, aliquet neque vitae, feugiat est. In porttitor felis eget venenatis bibendum. Quisque venenatis sapien ante, eu laoreet eros vulputate a. Morbi iaculis augue neque, quis porttitor ex faucibus eu.',
                    image: 'img/4.jpg'
                },
                {
                    id: 5,
                    name: 'Ana',
                    description: 'In hac habitasse platea dictumst. Pellentesque viverra nisi arcu, in iaculis ipsum faucibus at. Quisque tortor purus, molestie et dictum nec, fringilla sed leo. Etiam est metus, ullamcorper vitae ex quis, tincidunt facilisis tellus. Duis vitae erat nisi. Donec quis sollicitudin eros. Aenean varius venenatis magna, at ultrices ligula pharetra eget fringilla molestie id.',
                    image: 'img/5.jpg'
                },
                {
                    id: 6,
                    name: 'Sofia',
                    description: 'Curabitur vel posuere mi, nec iaculis pharetra eget fringilla lectus. Maecenas non tellus hendrerit, tempus neque nec, cursus velit. Morbi porta mattis nisi, efficitur convallis turpis posuere ac. Nam dui urna, laoreet facilisis turpis eget, elementum volutpat tellus. Nunc maximus libero ornare nisl pellentesque eleifend. Class aptent taciti sociosqu.',
                    image: 'img/6.jpg'
                },
                {
                    id: 7,
                    name: 'Larissa',
                    description: 'Morbi eu feugiat lectus. Etiam dapibus, ex quis aliquet venenatis, massa erat vulputate arcu, ac varius turpis nulla vel nibh. Proin a tellus aliquam, volutpat nibh sit amet, tempus velit. Praesent accumsan vitae tellus in convallis. Nam lobortis accumsan arcu, id vestibulum urna tincidunt at. Proin aliquet, sem rhoncus interdum pulvinar.',
                    image: 'img/7.jpg'
                },
                {
                    id: 8,
                    name: 'Maria Eduarda',
                    description: 'Nam semper quam ac neque efficitur, at facilisis erat accumsan. Nunc vehicula venenatis magna nec auctor. Aliquam consectetur, odio ultricies vehicula congue, ipsum urna aliquam risus, et laoreet felis mi eu nisi. Vivamus sed blandit est. Etiam blandit sed libero at congue. Vivamus pharetra eget eget rutrum nisl. Sed viverra risus nulla.',
                    image: 'img/8.jpg'
                },
                {
                    id: 9,
                    name: 'Isabela',
                    description: 'Ut rutrum elit vel est blandit, vitae ultricies sem egestas. Pellentesque eros felis, mattis hendrerit commodo et, venenatis egestas neque. Sed dictum laoreet luctus. Ut congue volutpat velit, eget gravida ligula convallis a. Nunc viverra ligula sed accumsan sollicitudin. Aliquam pretium enim massa, in aliquet enim lobortis quis.',
                    image: 'img/9.jpg'
                },
                {
                    id: 10,
                    name: 'Alice',
                    description: 'Sed ut ante orci. Proin augue libero, aliquam et dolor a, lacinia ultrices lorem. Phasellus risus tellus, sagittis porttitor nibh vel, tempus lacinia odio. Vestibulum aliquet, nibh vel interdum tincidunt, lacus libero sodales leo, sit amet scelerisque tortor dui auctor nibh. Nam eros diam, gravida quis mauris mollis, rhoncus maximus risus.',
                    image: 'img/10.jpg'
                },
                {
                    id: 11,
                    name: 'Roberta',
                    description: 'Praesent vitae ipsum a enim tempor rhoncus. Ut convallis eros et felis lacinia sagittis. Nulla in ante vestibulum, dictum justo et, tempus arcu. In aliquam purus nec fringilla porttitor. Phasellus iaculis commodo tempor. Fusce leo urna, venenatis hendrerit velit vel, maximus pellentesque justo. Fusce in blandit tortor.',
                    image: 'img/11.jpg'
                }
            ];
            return fakeItems;
        }
    },
    searchFor: function(query){
        
        /* todo: alterar essa function para filtrar os itens da lista,
            passando a exibir os itens que possuem o texto digitado no nome.
            Ao enviar o parâmetro 'query' vazio, o filtro deve ser anulado,
            e a listagem deve exibir todos os itens novamente */

        console.log(query);
    }
};