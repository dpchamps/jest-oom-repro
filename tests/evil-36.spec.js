
  describe("some-evil-spec=36", () => {
    it("evil-block-36", () => {
      window.evil_36 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  