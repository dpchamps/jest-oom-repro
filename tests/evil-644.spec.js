
  describe("some-evil-spec=644", () => {
    it("evil-block-644", () => {
      window.evil_644 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  