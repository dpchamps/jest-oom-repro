
  describe("some-evil-spec=969", () => {
    it("evil-block-969", () => {
      window.evil_969 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  