
  describe("some-evil-spec=804", () => {
    it("evil-block-804", () => {
      window.evil_804 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  