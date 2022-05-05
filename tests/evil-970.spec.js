
  describe("some-evil-spec=970", () => {
    it("evil-block-970", () => {
      window.evil_970 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  