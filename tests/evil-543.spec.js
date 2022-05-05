
  describe("some-evil-spec=543", () => {
    it("evil-block-543", () => {
      window.evil_543 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  