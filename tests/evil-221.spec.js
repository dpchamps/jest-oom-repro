
  describe("some-evil-spec=221", () => {
    it("evil-block-221", () => {
      window.evil_221 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  