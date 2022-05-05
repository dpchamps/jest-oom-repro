
  describe("some-evil-spec=827", () => {
    it("evil-block-827", () => {
      window.evil_827 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  