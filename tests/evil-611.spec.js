
  describe("some-evil-spec=611", () => {
    it("evil-block-611", () => {
      window.evil_611 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  