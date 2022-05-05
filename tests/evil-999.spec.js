
  describe("some-evil-spec=999", () => {
    it("evil-block-999", () => {
      window.evil_999 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  