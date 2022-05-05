
  describe("some-evil-spec=780", () => {
    it("evil-block-780", () => {
      window.evil_780 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  