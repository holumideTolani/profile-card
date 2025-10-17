
            const timeSpan = document.querySelector('[data-testid="test-user-time"]');
          
            function updateTime(){
                timeSpan.textContent = Date.now();
                
            }
            setInterval(timeSpan, 1000);
            timeSpan();
      