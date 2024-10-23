document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card')
    let currentCardIndex = 0;


    function initSwipe(card) {
        const hammer = new Hammer(card)

        hammer.on('swipeleft', () => {
            swipeCard(card, 'left')
        })
        hammer.on('swiperight', () => {
            swipeCard(card, 'right')
        })
    }

    function swipeCard(card, direction) {
        if (direction === 'left') {
            card.classList.add('swipe-left')
        } else if (direction === 'right') {
            card.classList.add('swipe-right')
        }

        setTimeout(() => {
            card.style.display = 'none';
            currentCardIndex++;
            if (currentCardIndex < cards.length) {
                cards[currentCardIndex].style.display = 'block';
                initSwipe(cards[currentCardIndex])

            } else {
                alert('Plus de profils à afficher !')
            }
        }, 300)
    }
    if (cards.length > 0) {
        initSwipe(cards[0])
    }
})


function swipeCard(card, direction) {
    const profileId = card.getAttribute('data-id')

    fetch('/swipe.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            profileId: profileId,
            action: direction === 'left' ? 'dislike' : 'like'

        }),
    });

    if (direction === 'left') {
        card.classList.add('swipe-left')
    } else if (direction === 'right') {
        card.classList.add('swipe-right')
    }

    setTimeout(() => {
        card.style.display = 'none'
        currentCardIndex++;
        if (currentCardIndex < cards.length) {
            cards[currentCardIndex].style.display = 'block'
        } else {
            alert('Plus de profils à  afficher !')
        }

    }, 300);

}

document.getElementById('swipe-left').addEventListener('click', () => {
    if (currentCardIndex < cards.length) {
        swipeCard(cards[currentCardIndex], 'left')
    }
})
document.getElementById('swipe-right').addEventListener('click', () => {
    if (currentCardIndex < cards.length) {
        swipeCard(cards[currentCardIndex], 'right')
    }
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        if (currentCardIndex < cards.length) {
            swipeCard(cards[currentCardIndex], 'left')
        }
    } else if (event.key === 'ArrowRight') {
        if (currentCardIndex < cards.length) {
            swipeCard(cards[currentCardIndex], 'right')
        }
    }
})