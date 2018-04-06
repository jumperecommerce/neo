/**
 * JS - Detalhes do Produto
 * UI Detalhes do Produto, Quick View
 */
import { isMobile } from '../../functions/mobile';

$(document).ready(function () {

    /**
     * Inicia Botão Compre Junto
     */
    $(".ui.toggle.button.compre.junto").state({
        text: {
            inactive: '<i class="plus icon"></i>',
            active:   '<i class="checkmark icon"></i>'
        }
    });
    $('.box-featured-prod').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows:false,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
        
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 520,
            settings: "unslick"
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    let $easyzoom = $(".easyzoom").easyZoom();
    $easyzoom.init();
    // Setup thumbnails example
    let $thumb = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
    $('.thumbnails').on('click', 'a', function(e) {
        let $this = $(this);
        e.preventDefault();
        $thumb.swap($this.data('standard'), $this.attr('href'));
    });

    if (!isMobile()) {
        /**
         * Semantic-UI Sticky
         * Box Compre Junto
         */
        $(".ui.sticky.comprar.junto").sticky({
            offset:  130,
            context: ".ui.rail.compre.junto"
        });

        $(".tabular.menu .item").tab({
            onVisible:function(){
                $(".ui.sticky.comprar.junto").sticky("refresh");
            }
        });
        /**
         * Semantic-UI Visibility
         * Detalhes do Produto Flutuante
         */
        $(".row.detalhes.produto").visibility({
            once:                  false,
            continuous:            true,
            onBottomPassed:        function () {
                $(".detalhes.produto.flutuante")
                    .addClass("ativo");
            },
            onBottomPassedReverse: function () {
                $(".detalhes.produto.flutuante")
                    .removeClass("ativo");
            }
        });

        $(".ui.container.footer").visibility({
            once:          false,
            continuous:    true,
            includeMargin: true,
            onTopVisible:  function () {
                $(".detalhes.produto.flutuante")
                    .removeClass("ativo");
            }
        });
        /**
         * Semantic-UI - PopUP
         * Popup de variação de produto no detalhe flutuante
         */
        $(".variacao.produto.button").popup({
            popup:    $(".variacao.produto.popup"),
            on:       'click',
            position: 'top center',
            inline:   true
        });

    }

});