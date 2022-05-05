
  describe("some-evil-spec=972", () => {
    it("evil-block-972", () => {
      window.evil_972 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  