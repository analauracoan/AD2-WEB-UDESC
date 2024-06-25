<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Consultório</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width, initial-scale=1">
        <link rel="stylesheet" href="../../css/general.css">
        <link rel="stylesheet" href="../../css/servicos_carlos/cadastrar_servico.css">
    </head>
    <body>
        <header class="cabecalho">
            <div class="cabecalho__caixa-nome">
                <a href="../../index.html" class="cabecalho__caixa-nome__link">
                    <h4 class="cabecalho__caixa-nome__link__nome">
                        Consultório <b>Priscila Oliver</b>
                    </h4>
                </a>
            </div>
            <div class="cabecalho__caixa-nav">
                <nav class="cabecalho__caixa-nav__nav">
                    <ul class="cabecalho__caixa-nav__nav__lista">
                        <li class="cabecalho__caixa-nav__nav__lista__item">
                            <a href="#" class="cabecalho__caixa-nav__nav__lista__item__link">
                                Pacientes
                            </a>
                        </li>
                        <li class="cabecalho__caixa-nav__nav__lista__item">
                            <a href="#" class="cabecalho__caixa-nav__nav__lista__item__link">
                                Anamneses
                            </a>
                        </li>
                        <li class="cabecalho__caixa-nav__nav__lista__item">
                            <a href="#" class="cabecalho__caixa-nav__nav__lista__item__link">
                                Tratamentos
                            </a>
                        </li>
                        <li class="cabecalho__caixa-nav__nav__lista__item">
                            <a href="#" class="cabecalho__caixa-nav__nav__lista__item__link">
                                Serviços
                            </a>
                        </li>
                        <li class="cabecalho__caixa-nav__nav__lista__item">
                            <a href="#" class="cabecalho__caixa-nav__nav__lista__item__link">
                                Usuários
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <aside class="sidebar">
            <p class="sidebar__caminho">
                Home > Cadastrar serviço
            </p>
            <nav class="sidebar__nav">
                <ul class="sidebar__nav__lista">
                    <li class="sidebar__nav__lista__item">
        <a href="#" class="sidebar__nav__lista__item__link">
                            Listar serviços
        </a>
                    </li>
                    <li class="sidebar__nav__lista__item">
                        <a href="#" class="sidebar__nav__lista__item__link">
            Cadastrar serviço
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        <main class="principal">
          <!--... -->
<!-- TABELA CORPO DO FORMULÁRIO -->
<table height="85%" width="100%" cellpadding="0">
  <tr>
    <td valign="top">
      <div class="container" style="background-color: #ADD8E6; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
        <h1 style="color: #1B264F;">Cadastro de Serviços Prestados</h1><BR>
        <form id="service-form">
          <label for="service-code" style="color: #1B264F;">Data de inclusão do serviço:</label><br><br>
          <input type="date" id="service-date" name="service-date" required><br><br>
          <label for="service-code" style="color: #1B264F;">Código do serviço:</label><br><br>
          <input type="text" id="service-code" name="service-code" required><br><br>>
          <label for="material-used" style="color: #1B264F;">Material usado:</label><br><br>
          <input type="text" id="material-used" name="material-used" required><br><br>
          <label for="service-description" style="color: #1B264F;">Descrição do serviço:</label><br><br>
          <textarea id="service-description" name="service-description" required></textarea><br><br>
          <label for="service-code" style="color: #1B264F;">Código do serviço secundario:</label><br><br>
          <input type="text" id="secondary-service-code" name="secondary-service-code" required><br><br>
          <label for="secondary-service-description" style="color: #1B264F;">Descrição do serviço secundário:</label><br><br>
          <textarea id="secondary-service-description" name="secondary-service-description" required></textarea><br><br>
          <label for="support-devices" style="color: #1B264F;">Aparelhos de apoio:</label><br><br>
          <input type="text" id="support-devices" name="support-devices" required><br><br>
          <label for="observations" style="color: #1B264F;">Observações:</label><br><br>
          <textarea id="observations" name="observations" required></textarea><br><br>
          <table bgcolor="#D9D9D9" align="center" valign="middle" width="100%" height="100%">
            <tr>
              <td colspan="3" bgcolor="#D9D9D9" height="55%" align="center" valign="top">
                <!-- TABELA BOTAO CRIAR FORMULÁRIO Serviço -->
                <table bgcolor="#576CAB" width="20%" height="78%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left" valign="middle" width="10%">
                      <a href="listagem_servicos.html" width="60" height="60"><img src="https://tasktaskapp.com/media/tasktask-icon.png" width="50" height="50"></a>
                    </td>
                    <td align="center" valign="middle" width="90%">
                      <a href="javascript:void(0)" onclick="validateForm()"><font color="white" size="3">Cadastrar Serviço</font></a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </td>
  </tr>
</table>
<script>
  function validateForm() {
    let serviceDate = document.getElementById('service-date').value;
    let serviceCode = document.getElementById('service-code').value;
    let materialUsed = document.getElementById('material-used').value;
    let serviceDescription = document.getElementById('service-description').value;
    let secondaryServiceCode = document.getElementById('secondary-service-code').value;
    let secondaryServiceDescription = document.getElementById('secondary-service-description').value;
    let supportDevices = document.getElementById('support-devices').value;
    let observations = document.getElementById('observations').value;
    let errors = [];
    if (!serviceDate) {
      errors.push('Data de inclusão do serviço é obrigatória');
    }
    if (!serviceCode) {
      errors.push('Código do serviço é obrigatório');
    }
    if (!materialUsed) {
      errors.push('Material usado é obrigatório');
    }
    if (!serviceDescription) {
      errors.push('Descrição do serviço é obrigatória');
    }
    if (!secondaryServiceCode) {
      errors.push('Código do serviço secundário é obrigatório');
    }
    if (!secondaryServiceDescription) {
      errors.push('Descrição do serviço secundário é obrigatória');
    }
    if (!supportDevices) {
      errors.push('Aparelhos de apoio são obrigatórios');
    }
    if (!observations) {
      errors.push('Observações são obrigatórias');
    }
    if (errors.length > 0) {
      alert('Erro(s):\n' + errors.join('\n'));
      return;
    }
    form.submit();
  }
</script>
        </main>
        <footer></footer>
    </body>
</html>
