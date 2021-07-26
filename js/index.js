        const $video = document.querySelector('#video')
        const $Play = document.querySelector('#Play')
        const $Pause = document.querySelector('#Pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')


        $Play.addEventListener('click', handlePlay)
        $Pause.addEventListener('click',handlePause)

        function handlePlay(){
            $video.play()
            $Play.hidden = true
            $Pause.hidden = false
            console.log('le diste click al boton de play')
        }

        function handlePause(){
            $video.pause()
            $Pause.hidden = true
            $Play.hidden = false
            console.log('le diste click al boton de pause')
        }

        $backward.addEventListener('click',handlebackward)

        function handlebackward(){
            $video.currentTime = $video.currentTime - 10
            console.log('para atras 10 segundos', $video.currentTime)
        }

        $forward.addEventListener('click',handleforward)

        function handleforward(){ 
            $video.currentTime = $video.currentTime + 10
            console.log('para adelante 10 segundos',$video.currentTime)
        }

        const $progress = document.querySelector('#progress')
        $video.addEventListener('loadedmetadata', handleLoaded)
        $video.addEventListener('timeupdate', handleTimeUpdate)

        function handleLoaded(){
            $progress.max = $video.duration;
            console.log('ha cargado mi video',$video.duration)
        }

        function handleTimeUpdate(){
            $progress.value = $video.currentTime
            console.log('Tiempo actual', $video.currentTime)
        }

        $progress.addEventListener('input', handleInput)

        function handleInput(){
            $video.currentTime = $progress.value
            console.log($progress.value)
        }