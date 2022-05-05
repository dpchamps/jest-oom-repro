
  describe("some-evil-spec=616", () => {
    it("evil-block-616", () => {
      window.evil_616 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  