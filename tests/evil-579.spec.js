
  describe("some-evil-spec=579", () => {
    it("evil-block-579", () => {
      window.evil_579 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  