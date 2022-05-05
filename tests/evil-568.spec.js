
  describe("some-evil-spec=568", () => {
    it("evil-block-568", () => {
      window.evil_568 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  