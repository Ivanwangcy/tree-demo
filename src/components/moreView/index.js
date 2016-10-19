import Vue from 'vue'
import './style.scss'

export default {
  name: 'more-view',
  render(h) {
    return (
      <div class="more-view">
        <h3>加更多好友，收更多能量</h3>
        <ul>
          <li class="friend-item">
            <img width="50" height="50" src="data:image/jpeg;base64,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"/>
            <br/>
            <span>鸿飞</span>
          </li>
          <li class="friend-item">
            <img width="50" height="50" src="data:image/jpeg;base64,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"/>
            <br/>
            <span>鸿飞</span>
          </li>
          <li class="friend-item">
            <img  width="50" height="50" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAeQMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABgEEBQMHAv/EAEkQAAEDAwEFBAQKBgYLAAAAAAECAwQABREGEhMhMUEHUWFxFCKBoRUWIzJCUmKRsfA3Q3J1gtEzNFN0krIkJURFVXOTs8HCw//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAyEQACAQIEAwYGAQUBAAAAAAAAAQIDEQQSITETQVEiMmFxkcEUM1KBobHRIzRCU2IF/9oADAMBAAIRAxEAPwD3GgCgOb77Udlbz7iG20DKlrUEhI7yTTYlJt2QquaycuLimtLWx25AHBluHcxgfBZ+d/CKpmcu6jWVONPWrK3huz49B1bO9abf48BJ/VQIoUR/Ev8AlVuHN7sxeKox7sL+ZHxWnHirVt+2u8OoA+7ZqeD/ANMr8cv9a/P8kixagj/1PV0tXcmXGbdH34BqOFLlIn4yD71NfZsBcdYW3+t26DdmRzXDcLTn+FXA+QNVtUXiaKph57Nx8/5Ltq1rZ50kQ33HLfPOB6JPRuV58M8D7DRTTdnoXlQmlmWq6oYwauYk0AUAUAUAUAUAUBQvV2iWa3Ozp7mwy33DJUeiUjqT3VEmkrl4Qc5ZUK8e0zNTOon6oQpuLnbjWnPqIHRTv1leHIUjTctZehSriVS7NH1/gaUIS2hKG0pSlIwEpGAB4Vujz27k0ICgJoCKAp3S1QLvGMe5RGpDXQLTnHkeY9lVlFSVmaU6s6bvB2F/4Mv+mht6elKuMFPO2zXPWSO5tw8vI1i6cod3U74YqlV0qqz6r3Ruae1Tb74VsN7yNPa/poUhOw637DzHiKiM1LQvUpSgr7rqbo41cyCgCgCgCgINAeWN6nh6g7RIzMhBdgsKU3BwfV3wz8qR1zghPdkHrwxjNOpqddajKnhm4vXn5dD0euw8MKAKAKAKAKAKAmgMTUOm4l6CHtpcWeycx5jPBxs/+R4fhWc6SlrzOmhipUdN1zRVsmpZUO4N2PVQQzNVwjTE8GZY8O5Xh+GRnFSaeWR3OEZx4lLVdOg4g5rQxCgCgCgFrXFxeatvwXbSV3W5ZZjNp4EA/PWT0CUknPfiqTellubUYq+aWyFHSHZzcbZd2LjdHo4EdRUhmOoq2jjAySBgDOf5VSnSyyu2aYrF8Sm4QjuekbChzSa67o8d05dCDwqStrHKS+3GjOyHjsttIK1nuAGTUN2VyYRcpKK5nid313fbhLW9HmOwo5PybDOBsjpk4yT3158q05O9z6SngaMI2au+o0dnes58+4C03dzfqcSSy+QArI4lJxz4ZwefCt6FVt5WcOPwcIR4kND0iuo8cKAKAKApXi0wrzBXDuDIcaVxHRST3pPQ1WUFJWZrSqypSzRZiWe8ydOTG7JqR9S2HFbNvuS/mujo24eix39a57uDyyPS7NePEp/dDoCK0MSaAKATtJONXXU2obm6oKdjyPQGUn9W0jnj9pWT7Kzg7ybOmsskIR8LnbtJu1xs2mFzLU4lpwOoS48QCW0HhkA8Cc4HI8zSq2o3RGFhGpUyyNjTjk56xwXbqEiYtlKndnGMny4cscqtG7WpjUUVN5djRIGONWKNJ7mfPjNToT8cr2mZDSmypJzwIwcVfvKxzyTpTUkeB3vTl0sklTM2K4UA4Q+hBLax3g9PI1wSpyi7M+ipYmnVjdM3+zfT1wfv8a5uMOsxIpUveLSU7wlJSAnPPnzrSjTk5Zuhy4/E01ScE7tnsddx8+RQBQBQBQFa4wIlzhuRJ7CXmHBhSFfngfGolFSVmaU6kqcs0XZiNPf1Joxxplq4oesRVsokS45dMfPJK9khWPtZ9nSuWSlT56Hr0p0sQtu30XMYbdqO6pvkK13Fq2yfTG1OIet7qiUJAztKQocEnkDtdatmalZmWWMoOcbq3UbM1czPL4dmXF1ldoUe7SLRcX3lSYjyAlaJLSztFBQrgSk599c6jaTV7M7nUvSi8t1zGZnSDkqQ0/qS8ybwGjtNx1toaZB6EoTzI8a0yfU7nPx7K0I2/ZxifGHSyPQmbcq9WtvhGW08lD7SOiFBXBWOQINFmjpuiz4dXtN2f4CZe9TXNhyLa9NPw3HAUekznkJS3nrspJJxRyk9EgqdKOsp38jZsVpbsVhh2xtZWI6MFf1lE5UfaSa1prKrHFi5525PmXa1OMihAUAUAUAUAUAUB8PstyGlsvoS42sbKkKGQoHoRRpPctFuLujz6eyOz+cqVYn4zzctYSq1vDLyug3awCrHLgcjzrjlHhPs+h7FGpLFRtUVrc+Q9/CM/wD4O/8A9RNaXfQxyrqTftPW2/x0s3Jjb3Z2m3EqKVtnvSocRSUVLcmnVlTd4sWZ51Do1oym5pvNnaAC25awl9oZwMLA9fmOeTVHmh4o2XDraWtL8FpjtBtSHAzdWpdqkH9XMZUkf4hkVbiQ56GLw9XeFpLwZuQ75b54CoU6K+D/AGbyVVosr2Zzz40NJRaLRKlcTWiscspNvUipKEUAUByjymJC3kMPIcWwvdupSclCsA4PccEGoTTLyg4pNrc7VJQXpGo0W7UTtuu5YixlsB6LKU5shYHBSVZ657ulZOpllaR2Rw3EpKdPV7NFd/X1hS4Wojsie6PoQ2FOe/lUPEQ5alo/+fW/ysvMoQtVXzU28+K1tiIbbIC3Z0gbQ/gScj31TjSn3UdHwVKl81t+RzvFvnQ4ok6x1XJSy4rCIdsQGi4fqggZV+eNUm3FXnI0g6S+VBK3NnTQb2lzdlx7bZpEW4bsupemfKLcSCASFZOOY4cKrRnSm+wROpKpDMp3W2h6Hiug5iaEi7r6JJmaafTDaU8606y/uU83EocSopHecA8KpPY1oNKevNNeqFm/aliamix7Hp1/eS7i5u3SUEGM2BlZUCOeARjz8KipUU1ljzGHwsqEnUqbLbxNeTobR8a2ti4QYyG2UhKpLrhbUfFSsjjThwS2LxxFZvRs5s9n9gfjpXbZtwaZWMpVGnKKT4gnNRwo8iXiaifaS9EQjs6ZbI3Wo9Qt/sTMfgKcLxYeJvvBehZTol1CdlOqtRDHfLB/FNTkf1Mrxo/RH0AaMkfS1bqEj+8IH/pU5H1Y4sP9cSm7pG52WQq56fusiZMXj0hm4rCkyUjkNoAYUOhqMsou8WJVKdWOSpGy5W5HT4wahwGzo6aXv7y3sZ/a7qtxZfSY/B0t+J+CbXpqXdrqbtq9iI4pLW7jW8JDjbIzklWeClfnyrlcnmmbZ40ocOj6jcxHZjN7EdptpA5JbSEj7hWhi23uecPaYiI7Q5cVtyRCXMjCZEkxXNhTTgVhxA6EH5xBrDKs9jtVaXAT3to/YXdYt3hi/vNS7iZ7kNpCUuKZSlQQobRKUjhn8cVyYhrOoTMpTw7UYVI2UvT7noWgrBa4cJN2gyXpr0xsH0l7AIT9UJHBODzHePCu2lTjCPZKVW1/TtZLkhsxWpiTQBQCbaUomdo19mO/7vjsxm88htAqJ86yj32zpndUIxXO7MHtnjT3ja1sMuuw0bwL3aSoJcOME48M4Pn31Sum7G2BlFXu9TY7J7XPtmnnTcEuMiQ+XGWXAQUJwBkg8snJx/Or0YtR1MsXOM59k0bVdf8AWepH7jMLbUF9LSWlqwlpoNpUF4+0VK4+AHSrKW9ykoaQUVudNHaoa1DbnHXkpjSmlHesKOClB4oVg8cFJSc8udITUkRWoum9NURoa7yrxbpjstxL25nPMNPoThLzaVeqoY4Y6eylOWZCvTUJJLojI7UdS3CwxoTNrWGXZKllT2yFFKU44DPDJyPuqtWTitDTC0Y1G83IzuzHWFyutzctd1c9I+SU628UgKGCMg45jjVaVRt2ZpisPCCzRPS8itzhJoBO1NlrX+knE8C4JbSj4bAIrKXfR00/kTXkVNf6cmSZjN4tTBkOpb3MhhJAUtIJKVJzzIyeHjWOKocVabmEoRqw4cnbmmbHZ5bZVq0tGizm909tuOFonOwFLUoDzwa3pxcYpMvXkpTunfb9DJWhkFAFAIiYwGur/bHHC0LpFYktrxz2DsqFYON5OPU7oVckIVLXy3Q3wYi4y5CluFe9dKx9kYAA91aRjluctSanaytZFzFXMzIuembLdZiJdwtseQ+gABa08wDkA9+PGquKbuaRqzirJnxeNK2S9PIeuNvaddQNkL4pJHcSCMjwo4Re6EK1SCtFmnDiMQYzcaIyhlhtOyhttOEpHgKtsUbbd2U7/Ybff4gi3NjeoSraQQSlSD3gjlVZRUty1OpKm7xZVsOlbVp5DptbBQ84MKecUVqx3ZPTwFQoKK0LTrTqPtM7xEXNa4DshWyUBaZKNrgrh6p93vqkVPRv7mtSVBZ4x52t7mtWxyibdCJ/aZZo6Mn4NhvSV9w3mED28PfWb1qLwOmPZw8n1a/A5VocwUAUAUAUAra2tUqQ3EvFnSFXW1rLjKf7ZBGFt+0fnjWdRPdbo3oTSbhLZmrp2+Q7/bUTISuHzXGlfPaX1SodCKtGSkrmdSm6crM1KsUCgCgCgCgCgIwKApXm6xLNbnp090NstJyT1UegHeTVZSUVdloQc5ZUYOhbfLIm3+6NlufdVhzdnmy0PmI88cfuqtOL1k+ZtiJK6hHZDZWhzhQBQCzctZwYAntlt5UuG822qMoBCnNtSUpUnPNPrc/CqOokbwoSlbxMy8azan225RbKma1ORGceiPLYIQ/uz627PNX3VVzunYvCg1KLntdJ/cs6inypD2nmWJr9vi3Iq3jzISF7e72kIyoHGfW6dMVZ6tLqZR7MZytdoyJOltRwLn8KWO7sOyiMOiQzui+Pt7I2VnxwD41DozTvFiONoyWSpGy8ORrRdcIhrTG1VAes8jkHVDbYc8lj8Dy76Z3HvqxbgqavRlm/Y0w5sWc0HYchl9s8lNLCh7qumnsYuLi7NHfNSQTmgCgIJ8RigFy86ztdtd9FjqXcLgo7KIkMbxZPiRwH4+FUlUSN4UJyV3oupQt9gud8uLN31cEJSydqLa21bTbJ+ss/SV+fCqqLk7yLSqRhFwpeo5AYrU5iaAKAKAS+0a2x3xZpe4CpSbpGaS6B6wQpYyD4VlUinY6cNO2ZX0szQg6Th2h+XNtanPTHG1oj+kL224+0SrZSnona4kVZQSu0ZyrSklGWx0nWSRetMNQLw6hNwCELMiMDht9PELRy6+XWpcbqzEaihUzR29jNtOoXY0pFn1MgRLmODb3JmWPrIV0P2TVoVeUtzCvhdM9LVflDAPR5jSkqDT7W0ULSQFJyDggjzzWrs0cizQkuRjzNAWB9wvRWHrc+f1sB5TJ+4cPdXM6UT1I4mot3fz1OHxVv8bAtusp6EjkmXHQ/7zioySW0i3GpvvQR9Jtmt0DA1DbnPtKgYPuNTafUjPQ+h+pCrRrV/gvVENgdSzbwo+80yz6hToL/AA/J8K0WuQUm+3+6XIdWi7uWleaU/wA6tGlfvO5lVxbh8uKX5KLlqToq4qvFmgJdtq0BEyOhOXGUj6bZPEj6yevPyiUOHrFaE0sR8QslR9rk/ZjxAnRrhDalw3kPMOp2kOJPAirJ3V0UlFxdmQ1cYb012E1JZVKZALjIWNpAPLIpdXsMrte2hayKkgKAKAggHnQE0AUBSu1rhXeIqLcY6H2FfRWOR7weYPiKhpPctGTg7xYrdnrfo9tuUQFRTFukhlO0cnAIIyevA0o6RsZ493qqXVIdU8qklE0JCgCgOEjmKvA56/I48+FXOfbUUZSF6LuCrlDSVWGSv/TYyf8AZVk/0qB0SfpD8jmnHhu62PUoVViI5Jd5bePgZy7QZGpb2IUj0a8tvIuFvlA8HGnEBJSr6yNpBBHTNVULt23NZ1skINq8Xo/s/wB6mgNY3C6tMWu0RAxfVFSJYfBKIYTwUs/WzkbPfRTcuytyJUoU1nk7x5eJodnkm4SoNyXcJ7s5CJ7jLDziUpKkowCQB0KtqrQvbUjEKKasraDZVzAKAKAKADQCbpT5C+6ph8ii4h8DwcbSc+41FHRyRGNV405eHuxuZVlOOoq8lZmdKV4nSqmoUAUBWeOV+VaR2OSs7yES5W+4O6/fVarh6JLVb23mg4naaeCVlK0LHtTgjlk1zzT4mjPQouEsKlNXVy7NGsJsJ+3vWS14fbU0t/007GCMZ2dnPsqXKo1ZoiFLDwkpqT08Dhcra7Ce0lCivbV6jJ3an0j1THSkB3bHVJOyB4nzqFF3iluXlOLhUlJdl/vkWdQPvM3ZNvsMNkXe6MqK5i8JDTaMDaV1JG1wFXqOztHdnPhoKUc9R9mL2GTT9pYsdnjW2MSW2EY2jzWonKlHxJJPtpGOVWNJzc5OTNGpKBQBQBQEHlQCdaf0gao/5ML/ACrqKffZOK+RT837DUx8/wBlazOShuyxWZ1BQAeVAVF/PV51qtjhn3mLcj9I9q/dkj/OisZ/MR6GH/tZea/TG41JUWJH6Qh+6P8A7VEPmfYit8j7+xXc/SZb/wB0vf8AcTUT76L4f+2fmhwqxUKA/9k="/>
            <br/>
            <span>鸿飞</span>
          </li>
        </ul>
      </div>
    )
  }
}
