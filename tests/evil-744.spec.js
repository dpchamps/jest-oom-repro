
  describe("some-evil-spec=744", () => {
    it("evil-block-744", () => {
      window.evil_744 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  