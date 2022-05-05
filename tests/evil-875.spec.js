
  describe("some-evil-spec=875", () => {
    it("evil-block-875", () => {
      window.evil_875 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  