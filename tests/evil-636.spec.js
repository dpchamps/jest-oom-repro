
  describe("some-evil-spec=636", () => {
    it("evil-block-636", () => {
      window.evil_636 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  