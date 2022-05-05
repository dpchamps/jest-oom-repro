
  describe("some-evil-spec=768", () => {
    it("evil-block-768", () => {
      window.evil_768 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  