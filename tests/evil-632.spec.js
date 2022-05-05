
  describe("some-evil-spec=632", () => {
    it("evil-block-632", () => {
      window.evil_632 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  