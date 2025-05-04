let tentativas = 3;
        let usuarioCorreto = false;

        function mostrarOcultarSenha() {
            let senhaInput = document.getElementById('senha');
            senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
        }

        function entrar() {
            let usuario = document.getElementById('usuário').value.trim();
            let senha = document.getElementById('senha').value.trim();

            if (!usuario || !senha) {
                alert("Por favor, preencha todos os campos antes de continuar.");
                return;
            }

            if (usuario !== "admin") {
                alert("Usuário incorreto.");
                return;
            }

            if (!usuarioCorreto) {
                usuarioCorreto = true;
            }

            if (tentativas > 0) {
                if (senha !== "1234") {
                    alert(`Senha incorreta. Restam ${tentativas - 1} tentativas.`);
                    tentativas--;
                } else {
                    alert(`Login realizado com sucesso!\nBem-vindo, ${usuario}!`);
                    return;
                }

                if (tentativas === 0) {
                    alert("Número máximo de tentativas atingido! Acesso bloqueado.");
                    document.querySelector('input[type="button"]').disabled = true;
                }
            }
        }