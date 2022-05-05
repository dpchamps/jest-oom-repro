
  describe("some-evil-spec=499", () => {
    it("evil-block-499", () => {
      window.evil_499 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  